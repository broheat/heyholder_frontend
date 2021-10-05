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
      code
      title
      createdAt
      amount
      user {
        nickname
      }
    }
  }
`;

export const allResearch = gql`
  query allresearch($code: String!) {
    allResearch(code: $code) {
      id
      code
      title
      writer
      link
      day
      company
      documentid
    }
  }
`;
