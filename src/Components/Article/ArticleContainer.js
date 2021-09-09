import { useQuery } from "@apollo/client";
import { getPost, haveStock } from "./ArticleQuery";
import ArticlePresenter from "./ArticlePresenter";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code, id },
  },
}) => {
  const history = useHistory();
  const { data: getPostData, loading: getPostLoading } = useQuery(getPost, {
    variables: { code: code, id: id },
  });
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );

  useEffect(() => {
    if (
      haveStockData &&
      !haveStockData.havestock &&
      getPostData &&
      !getPostData.getpost
    ) {
      history.push("/home");
    }
  }, [haveStockData, getPostData, history]);

  return (
    <ArticlePresenter
      code={code}
      id={id}
      getPostData={getPostData}
      getPostLoading={getPostLoading}
      haveStockData={haveStockData}
      haveStockLoading={haveStockLoading}
    ></ArticlePresenter>
  );
};
