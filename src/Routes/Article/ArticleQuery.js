import { gql } from "@apollo/client";

export const getPost = gql`
  query getpost($id: ID!) {
    getpost(id: $id) {
      title
      contents
    }
  }
`;

export const haveStock = gql`
  query havestock($code: String!) {
    havestock(code: $code) {
      stockname
      amount
    }
  }
`;
