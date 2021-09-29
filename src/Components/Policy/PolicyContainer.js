import { useState } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import PolicyPresenter from "./PolicyPresenter";
import { Agree, LOG_OUT } from "./PolicyQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [userName, setUserName] = useState("");
  const [agreeMutation] = useMutation(Agree);
  const [logOutMutation] = useMutation(LOG_OUT);

  const onClick = async (e) => {
    e.preventDefault();
    try {
      await agreeMutation({ variables: { agree1: true, username: userName } });
    } catch (e) {
      toast.error("동의 해주세요.");
    }
  };

  const logoutwithkakao = () => {
    window.Kakao.Auth.logout(() => {
      logOutMutation();
    });
  };

  return (
    <PolicyPresenter
      onClick={onClick}
      logOut={logoutwithkakao}
      userName={userName}
      setUserName={setUserName}
    />
  );
};
