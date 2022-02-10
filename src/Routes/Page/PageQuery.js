import { gql } from "@apollo/client";

export const HAVE_STOCK = gql`
  query havestock($code: String!) {
    havestock(code: $code) {
      stockname
    }
  }
`;

export const ALL_POST = gql`
  query allpost($code: String!) {
    allpost(code: $code) {
      id
      code
      title
      contents
      createdAt
      amount
      user {
        nickname
      }
    }
  }
`;

export const ALL_RESEARCH = gql`
  query allresearch($code: String!) {
    allResearch(code: $code) {
      id
      code
      title
      writer
      link
      day
      company
      documentid
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

export const GET_POST = gql`
  query getpost($id: ID!) {
    getpost(id: $id) {
      title
      contents
    }
  }
`;
export const TOTAL_AMOUNT = gql`
  query totalamount($code: String!) {
    totalAmount(code: $code)
  }
`;
