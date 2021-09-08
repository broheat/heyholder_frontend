import { gql } from "@apollo/client";

export const whoAmI = gql`
  {
    whoami {
      agree1
    }
  }
`;

export const Agree = gql`
  mutation agree($agree1: Boolean!) {
    agree(agree1: $agree1) {
      user {
        agree1
        stockSet {
          code
        }
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
