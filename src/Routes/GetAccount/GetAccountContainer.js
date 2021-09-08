import { useMutation } from "@apollo/client";
import { getAccount } from "./GetAccountQuery";
import { toast } from "react-toastify";
import AddStockPresenter from "./GetAccountPresenter";
import { useState } from "react";

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

  return (
    <AddStockPresenter
      companyId={companyId}
      setCompanyId={setCompanyId}
      companySecret={companySecret}
      setCompanySecret={setCompanySecret}
      onSubmit={onSubmit}
      open={open}
      setOpen={setOpen}
    ></AddStockPresenter>
  );
};
