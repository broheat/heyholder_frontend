import { allStock } from "./HomeQuery";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import HomePresenter from "./HomePresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { data, loading } = useQuery(allStock, {
    fetchPolicy: "network-only",
  });
  const history = useHistory();

  useEffect(() => {
    if (data && data.allstock.length === 0) {
      history.push(`/getAccount`);
    }
  }, [data, history]);
  return <HomePresenter loading={loading} data={data}></HomePresenter>;
};
