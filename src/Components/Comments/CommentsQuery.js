import { gql } from "@apollo/client";

export const getPost = gql`
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

export const createComment = gql`
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
