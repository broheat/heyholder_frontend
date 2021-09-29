import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost($code: String!, $contents: String!, $title: String!) {
    createPost(code: $code, contents: $contents, title: $title) {
      post {
        id
        title
        contents
        code
      }
    }
  }
`;

export const haveStock = gql`
  query havestock($code: String!) {
    havestock(code: $code) {
      stockname
    }
  }
`;
