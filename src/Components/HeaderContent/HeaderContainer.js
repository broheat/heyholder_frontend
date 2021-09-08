import { allStock, totalAmount } from "./HeaderQuery";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import HeaderPresenter from "./HeaderPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ code, stockname }) => {
  const { data: allStockData, loading: allStockLoading } = useQuery(allStock);
  const { data: totalAmountData, loading: totalAmountLoading } = useQuery(
    totalAmount,
    { variables: { code } }
  );

  const history = useHistory();

  const onClick = (code) => {
    history.push(`/post/${code}`);
  };

  useEffect(() => {
    if (allStockData && !allStockData.allstock) history.push("/getAccount");
  }, [allStockData, history]);

  return (
    <HeaderPresenter
      totalAmountLoading={totalAmountLoading}
      totalAmountData={totalAmountData}
      allStockLoading={allStockLoading}
      allStockData={allStockData}
      onClick={onClick}
      code={code}
      stockname={stockname}
    ></HeaderPresenter>
  );
};
