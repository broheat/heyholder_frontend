import { allStock } from "./HeaderQuery";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import HeaderPresenter from "./HeaderPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { data: allStockData } = useQuery(allStock, {
    fetchPolicy: "network-only",
  });
  const history = useHistory();
  const code = history.location.pathname.split("/")[2];
  useEffect(() => {
    if (allStockData && !allStockData.allstock) history.push("/getAccount");
  }, [allStockData, history]);

  return <HeaderPresenter allStockData={allStockData} code={code} />;
};
