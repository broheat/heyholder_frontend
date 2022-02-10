import { gql } from "@apollo/client";

export const HAVE_STOCK = gql`
  query havestock($code: String!) {
    havestock(code: $code) {
      stockname
    }
  }
`;

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
