import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import GetStockPresenter from "./GetStockPresenter";
import { useState } from "react";
import { getStock } from "./GetStockQuery";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [getStockMutation] = useMutation(getStock, {
    variables: { click: click },
    onCompleted: ({ getStockMutation }) => {
      setTimeout(() => {
        history.push("/home");
      }, 500);
    },
  });

  const onClick = async () => {
    setClick(true);
    try {
      await getStockMutation();
    } catch (e) {
      toast.error("아이디와 비밀번호를 다시 확인 해 보세요.");
    }
  };

  return <GetStockPresenter onClick={onClick}></GetStockPresenter>;
};
