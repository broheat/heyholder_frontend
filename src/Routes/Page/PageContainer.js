import PagePresenter from "./PagePresenter";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { ALL_POST, HAVE_STOCK, TOTAL_AMOUNT } from "./PageQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code },
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

  const { data: postData, loading: postLoading } = useQuery(ALL_POST, {
    variables: { code },
    fetchPolicy: "network-only",
  });

  const onPostClick = (id, code) => {
    history.push(`/article/${code}/${id}`);
  };
  return (
    <PagePresenter
      totalAmountData={totalAmountData}
      totalAmountLoading={totalAmountLoading}
      haveStockData={haveStockData}
      haveStockLoading={haveStockLoading}
      postLoading={postLoading}
      postData={postData}
      onClick={onPostClick}
    />
  );
};
