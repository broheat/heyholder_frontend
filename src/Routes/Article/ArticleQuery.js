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
      outstandingShare
    }
  }
`;

export const totalParticipant = gql`
  query totalParticipant($id: ID!) {
    totalParticipant(id: $id)
  }
`;
export const participantShare = gql`
  query participantShare($id: ID!) {
    participantShare(id: $id)
  }
`;

export const participatePropose = gql`
  mutation participantPropose($id: ID!, $numberOfStock: Int!) {
    participantPropose(id: $id, numberOfStock: $numberOfStock) {
      participant {
        id
      }
    }
  }
`;
