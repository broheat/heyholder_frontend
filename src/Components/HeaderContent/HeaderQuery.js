import { gql } from "@apollo/client";

export const haveStock = gql`
  query havestock($code: String!) {
    havestock(code: $code) {
      stockname
    }
  }
`;

export const allStock = gql`
  query allstock {
    allstock {
      code
      stockname
    }
  }
`;

export const totalAmount = gql`
  query totalamount($code: String!) {
    totalamount(code: $code)
  }
`;
