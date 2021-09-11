import { allStock, totalAmount } from "./HeaderQuery";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import HeaderPresenter from "./HeaderPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ code, data, state }) => {
  const { data: allStockData, loading: allStockLoading } = useQuery(allStock);
  const { data: totalAmountData, loading: totalAmountLoading } = useQuery(
    totalAmount,
    { variables: { code } }
  );

  const history = useHistory();

  const onClickWrite = (code) => {
    history.push(`/post/${code}`);
  };
  const onClick = (active, code) => {
    history.push(`/${active}/${code}`);
  };

  useEffect(() => {
    if (allStockData && !allStockData.allstock) history.push("/getAccount");
  }, [allStockData, history]);

  return (
    <HeaderPresenter
      state={state}
      totalAmountLoading={totalAmountLoading}
      totalAmountData={totalAmountData}
      allStockLoading={allStockLoading}
      allStockData={allStockData}
      onClickWrite={onClickWrite}
      onClick={onClick}
      code={code}
      stockname={data.havestock?.stockname}
    ></HeaderPresenter>
  );
};
