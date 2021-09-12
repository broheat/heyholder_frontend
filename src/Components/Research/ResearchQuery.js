import { gql } from "@apollo/client";

export const haveStock = gql`
  query havestock($code: String!) {
    havestock(code: $code) {
      stockname
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
    }
  }
`;
