import PagePresenter from "./PagePresenter";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import {
  ALL_POST,
  ALL_RESEARCH,
  HAVE_STOCK,
  CREATE_POST,
  GET_POST,
  TOTAL_AMOUNT,
} from "./PageQuery";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import _ from "lodash";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code, page, id },
  },
}) => {
  const { data: totalAmountData, loading: totalAmountLoading } = useQuery(
    TOTAL_AMOUNT,
    { variables: { code } }
  );
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    HAVE_STOCK,
    { variables: { code } }
  );
  const history = useHistory();

  useEffect(() => {
    if (haveStockData && !haveStockData.havestock) {
      history.push("/home");
    }
  }, [haveStockData, history]);

  switch (page) {
    case "article":
      console.log(id, page, code);
      const { data: getPostData, loading: getPostLoading } = useQuery(
        GET_POST,
        {
          variables: { code: code, id: id },
        }
      );
      return (
        <PagePresenter
          type={page}
          totalAmountData={totalAmountData}
          totalAmountLoading={totalAmountLoading}
          haveStockData={haveStockData}
          haveStockLoading={haveStockLoading}
          getPostData={getPostData}
          getPostLoading={getPostLoading}
        />
      );
    case "post":
      const [contents, setContents] = useState("");
      const [title, setTitle] = useState("");
      const [creatPostMutation] = useMutation(CREATE_POST, {
        variables: { code: code, contents: contents, title: title },
      });
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
        <PagePresenter
          type={page}
          totalAmountData={totalAmountData}
          totalAmountLoading={totalAmountLoading}
          haveStockData={haveStockData}
          haveStockLoading={haveStockLoading}
          contents={contents}
          title={title}
          setContents={setContents}
          setTitle={setTitle}
          onSubmit={onSubmit}
        />
      );

    case "board":
      const { data: postData, loading: postLoading } = useQuery(ALL_POST, {
        variables: { code },
        fetchPolicy: "network-only",
      });
      const onPostClick = (id, code) => {
        history.push(`/article/${code}/${id}`);
      };
      return (
        <PagePresenter
          type={page}
          totalAmountData={totalAmountData}
          totalAmountLoading={totalAmountLoading}
          haveStockData={haveStockData}
          haveStockLoading={haveStockLoading}
          postLoading={postLoading}
          postData={postData}
          onClick={onPostClick}
        />
      );
    case "research":
      const { data: researchData, loading: researchLoading } = useQuery(
        ALL_RESEARCH,
        {
          variables: { code },
        }
      );
      return (
        <PagePresenter
          type={page}
          totalAmountData={totalAmountData}
          totalAmountLoading={totalAmountLoading}
          haveStockData={haveStockData}
          haveStockLoading={haveStockLoading}
          researchLoading={researchLoading}
          researchData={researchData}
        />
      );

    default:
      return (
        <Container>
          <h1>hi</h1>
        </Container>
      );
  }
};
