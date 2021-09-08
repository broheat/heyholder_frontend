import { useQuery } from "@apollo/client";
import { getPost, haveStock } from "./ArticleQuery";
import ArticlePresenter from "./ArticlePresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code, id },
  },
}) => {
  const { data: getPostData, loading: getPostLoading } = useQuery(getPost, {
    variables: { code: code, id: id },
  });
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );

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
