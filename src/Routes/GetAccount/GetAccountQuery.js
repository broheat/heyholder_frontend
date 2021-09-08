import { gql } from "apollo-boost";

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
