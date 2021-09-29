import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import PostPresenter from "./PostPresenter";
import { CREATE_POST, haveStock } from "./PostQuery";
import _ from "lodash";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code },
  },
}) => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [creatPostMutation] = useMutation(CREATE_POST, {
    variables: { code: code, contents: contents, title: title },
  });
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );
  const history = useHistory();
  console.log(haveStockData);

  useEffect(() => {
    if (haveStockData && !haveStockData.havestock) history.push("/");
  }, [haveStockData, history]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (code !== "" && contents !== "" && title !== "") {
      try {
        const { data } = await creatPostMutation();
        if (!_.isEmpty(data.createPost.errors)) return;

        const post = _.get(data, "createPost.post");
        history.push(`/article/${post.code}/${post.id}`);
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("내용을 적어주세요.");
    }
  };

  return (
    <PostPresenter
      code={code}
      contents={contents}
      title={title}
      setContents={setContents}
      setTitle={setTitle}
      onSubmit={onSubmit}
      loading={haveStockLoading}
      data={haveStockData}
    ></PostPresenter>
  );
};
