import { useEffect, useRef } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import PolicyPresenter from "./PolicyPresenter";
import { Agree, LOG_OUT } from "./PolicyQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [agreeMutation, { data: agreeData }] = useMutation(Agree);
  const [logOutMutation] = useMutation(LOG_OUT);
  const history = useHistory();
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (agreeData) {
        console.log(agreeData);
        history.push(`/getAccount`);
      }
    }
  }, [agreeData]);

  const onClick = async (e) => {
    e.preventDefault();
    try {
      await agreeMutation({ variables: { agree1: true } });
    } catch (e) {
      toast.error("동의 해주세요.");
    }
  };

  const logoutwithkakao = () => {
    window.Kakao.Auth.logout(() => {
      logOutMutation();
    });
  };

  return <PolicyPresenter onClick={onClick} logOut={logoutwithkakao} />;
};
