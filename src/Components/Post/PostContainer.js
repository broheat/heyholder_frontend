import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import PostPresenter from "./PostPresenter";
import { CREATE_POST } from "./PostQuery";
import _ from "lodash";
import { allPost } from "../Board/BoardQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code },
  },
}) => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [creatPostMutation, { loading, error }] = useMutation(CREATE_POST, {
    variables: { code: code, contents: contents, title: title },
    update(cache, { data: { creatPostMutation } }) {
      const { postData } = cache.readQuery({
        query: allPost,
        variables: { code },
      });
      cache.writeQuery({
        query: allPost,
        data: { postData: [...postData, creatPostMutation] },
      });
    },
  });
  const history = useHistory();

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
    ></PostPresenter>
  );
};
