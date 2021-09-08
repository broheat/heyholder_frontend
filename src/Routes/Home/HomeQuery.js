import { gql } from "@apollo/client";

export const allStock = gql`
  query allstock {
    allstock {
      code
      stockname
    }
  }
`;
