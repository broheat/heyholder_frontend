import { gql } from "@apollo/client";

export const getStock = gql`
  mutation getStock($click: Boolean!) {
    getStock(click: $click) {
      result
    }
  }
`;
