import ResearchPresenter from "./ResearchPresenter";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { allResearch, haveStock } from "./ResearchQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code },
  },
}) => {
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );
  const { data: researchData, loading: researchLoading } = useQuery(
    allResearch,
    {
      variables: { code },
    }
  );

  const history = useHistory();

  useEffect(() => {
    if (haveStockData && !haveStockData.havestock) {
      history.push("/home");
    }
  }, [haveStockData, history]);

  return (
    <ResearchPresenter
      code={code}
      haveStockData={haveStockData}
      haveStockLoading={haveStockLoading}
      researchLoading={researchLoading}
      researchData={researchData}
    />
  );
};
