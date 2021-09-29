import { gql } from "@apollo/client";

export const haveStock = gql`
  query havestock($code: String!) {
    havestock(code: $code) {
      stockname
    }
  }
`;

export const allPost = gql`
  query allpost($code: String!) {
    allpost(code: $code) {
      id
      contents
      title
      createdAt
      amount
      user {
        username
      }
    }
  }
`;
