import { gql } from "@apollo/client";

export const getAccount = gql`
  mutation getAccount(
    $companyId: String!
    $companySecret: String!
    $company: Int!
  ) {
    getAccount(
      companyId: $companyId
      companySecret: $companySecret
      company: $company
    ) {
      account {
        id
      }
    }
  }
`;

export const whoAmI = gql`
  {
    whoami {
      agree1
      username
    }
  }
`;
