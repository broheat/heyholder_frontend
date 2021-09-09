import { gql } from "@apollo/client";

export const GET_POST = gql`
  query getpost($id: ID!) {
    getpost(id: $id) {
      id
      title
      contents
      commentSet {
        user {
          username
        }
        contents
        createdAt
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($id: ID!, $contents: String!) {
    createComment(id: $id, contents: $contents) {
      comment {
        user {
          username
        }
        contents
        createdAt
      }
    }
  }
`;
