import { useMutation, useQuery } from "@apollo/client";
import { getAccount, whoAmI } from "./GetAccountQuery";
import { toast } from "react-toastify";
import GetAccountPresenter from "./GetAccountPresenter";
import { useState, Fragment } from "react";
import Policy from "../../Components/Policy";
import { Loader, Segment, Dimmer, Image } from "semantic-ui-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
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
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  }

  return (
    <Fragment>
      {data.whoami.agree1 ? (
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
        <Policy />
      )}
    </Fragment>
  );
};
