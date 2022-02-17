import { useMutation, useQuery } from "@apollo/client";
import {
  getPost,
  haveStock,
  participatePropose,
  totalParticipant,
  participantShare,
} from "./ArticleQuery";
import ArticlePresenter from "./ArticlePresenter";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code, id },
  },
}) => {
  const [participantStock, setParticipantStock] = useState(0);
  const history = useHistory();

  const { data: totalParticipantData, loading: totalParticipantLoading } =
    useQuery(totalParticipant, { variables: { id } });

  const { data: participantShareData, loading: participantShareLoading } =
    useQuery(participantShare, {
      variables: { id },
    });
  const { data: getPostData, loading: getPostLoading } = useQuery(getPost, {
    variables: { id: id },
  });

  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );

  const [participantMutation] = useMutation(participatePropose, {
    variables: {
      id: id,
      numberOfStock: participantStock,
    },
  });

  const onSubmit = async (event) => {
    if (participantStock !== "") {
      try {
        await participantMutation();
      } catch (error) {
        toast.error("참여 수를 입력하세요");
      }
    }
  };

  useEffect(() => {
    if (
      haveStockData &&
      !haveStockData.havestock &&
      getPostData &&
      !getPostData.getpost
    ) {
      history.push("/home");
    }
  }, [haveStockData, getPostData, history]);

  return (
    <ArticlePresenter
      code={code}
      id={id}
      participantShareLoading={participantShareLoading}
      participantShareData={participantShareData}
      totalParticipantData={totalParticipantData}
      totalParticipantLoading={totalParticipantLoading}
      getPostData={getPostData}
      getPostLoading={getPostLoading}
      haveStockData={haveStockData}
      haveStockLoading={haveStockLoading}
      participantStock={participantStock}
      setParticipantStock={setParticipantStock}
      onSubmit={onSubmit}
    ></ArticlePresenter>
  );
};
