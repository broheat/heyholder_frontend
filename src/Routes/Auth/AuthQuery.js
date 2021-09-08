import { gql } from "apollo-boost";

export const KAKAO_LOGIN = gql`
  mutation SocialAuth($provider: String!, $accessToken: String!) {
    socialAuth(provider: $provider, accessToken: $accessToken) {
      social {
        user {
          id
        }
        id
      }
      token
    }
  }
`;
export const whoAmI = gql`
  {
    whoami {
      username
      agree_1
    }
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const allStock = gql`
  query allstock {
    allstock {
      code
      stockname
    }
  }
`;
