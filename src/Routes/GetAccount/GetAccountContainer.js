import { useMutation, useQuery } from "@apollo/client";
import { getAccount, whoAmI } from "./GetAccountQuery";
import { toast } from "react-toastify";
import GetAccountPresenter from "./GetAccountPresenter";
import { useState } from "react";
import Policy from "../../Components/Policy";
import { Container } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [agree, setAgree] = useState(false);
  const [companyId, setCompanyId] = useState("");
  const [companySecret, setCompanySecret] = useState("");
  const [open, setOpen] = useState(false);
  const [getAccountMutation] = useMutation(getAccount, {
    variables: {
      companyId: companyId,
      companySecret: companySecret,
      company: 1,
    },
  });
  const { data, loading } = useQuery(whoAmI);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (companyId !== "" && companySecret !== "") {
      try {
        await getAccountMutation();
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("정보를 입력하시오");
    }
    setOpen(false);
  };
  if (loading) {
    return <Container></Container>;
  }
  const agreeResult = data.whoami.agree1 || agree;

  return (
    <div className="page-holder align-items-center bg-gray-100">
      <Container fluid className="px-lg-4 px-xl-5">
        {agreeResult ? (
          <GetAccountPresenter
            companyId={companyId}
            setCompanyId={setCompanyId}
            companySecret={companySecret}
            setCompanySecret={setCompanySecret}
            onSubmit={onSubmit}
            open={open}
            setOpen={setOpen}
          />
        ) : (
          <Policy setAgree={setAgree} />
        )}
      </Container>
    </div>
  );
};
