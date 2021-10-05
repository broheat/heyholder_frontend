import PagePresenter from "./PagePresenter";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { allPost, haveStock, allResearch } from "./PageQuery";
import { Container } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code, page },
  },
}) => {
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );
  const history = useHistory();

  useEffect(() => {
    if (haveStockData && !haveStockData.havestock) {
      history.push("/home");
    }
  }, [haveStockData, history]);

  switch (page) {
    case "board":
      const { data: postData, loading: postLoading } = useQuery(allPost, {
        variables: { code },
        fetchPolicy: "network-only",
      });
      const onPostClick = (id, code) => {
        history.push(`/article/${code}/${id}`);
      };
      return (
        <PagePresenter
          type={page}
          haveStockData={haveStockData}
          haveStockLoading={haveStockLoading}
          postLoading={postLoading}
          postData={postData}
          onClick={onPostClick}
        />
      );
    case "research":
      const { data: researchData, loading: researchLoading } = useQuery(
        allResearch,
        {
          variables: { code },
        }
      );
      return (
        <PagePresenter
          type={page}
          haveStockData={haveStockData}
          haveStockLoading={haveStockLoading}
          researchLoading={researchLoading}
          researchData={researchData}
        />
      );

    default:
      return <Container></Container>;
  }
};
