import { gql } from "@apollo/client";

export const Agree = gql`
  mutation agree($agree1: Boolean!, $nickname: String!) {
    agree(agree1: $agree1, nickname: $nickname) {
      user {
        agree1
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
