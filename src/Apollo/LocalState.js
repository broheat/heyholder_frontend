import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(
  Boolean(localStorage.getItem("token")) || false
);

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      isLoggedInVar(true);
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location = "/";
      return null;
    },
  },
};

export const typePolicies = {
  Query: {
    fields: {
      isLoggedIn: {
        read() {
          return isLoggedInVar();
        },
      },
    },
  },
};
