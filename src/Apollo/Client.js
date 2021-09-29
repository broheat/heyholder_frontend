import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { resolvers, typePolicies } from "./LocalState";

const httpLink = createHttpLink({
  uri: "http://127.0.0.1:8000/graphql/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      authorization: token ? `JWT ${token}` : "",
    },
  };
});
export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ typePolicies: typePolicies }),
  connectToDevTools: true,
  resolvers: resolvers,
});
