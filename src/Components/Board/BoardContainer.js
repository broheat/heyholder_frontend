import BoardPresenter from "./BoardPresenter";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { allPost, haveStock } from "./BoardQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code },
  },
}) => {
  const history = useHistory();
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );

  const onRowClick = (id, code) => {
    history.push(`/article/${code}/${id}`);
  };

  useEffect(() => {
    if (haveStockData && !haveStockData.havestock) history.push("/");
  }, [haveStockData, history]);

  const { data: postData, loading: postLoading } = useQuery(allPost, {
    variables: { code },
    fetchPolicy: "network-only",
  });
  return (
    <BoardPresenter
      code={code}
      haveStockData={haveStockData}
      haveStockLoading={haveStockLoading}
      postLoading={postLoading}
      postData={postData}
      onRowClick={onRowClick}
    />
  );
};
