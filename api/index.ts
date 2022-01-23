import { ApolloServer } from "apollo-server";
import { ApolloServerExpressConfig } from "apollo-server-express";
import userSchema from "./user/schema/user.graphql";
import userResolvers from "./user/resolvers/userResolvers";
import UsersAPI from "./user/data-source/user";

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const apolloServerConfig: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI(),
    };
  },
};

const server = new ApolloServer(apolloServerConfig);

server.listen().then(({ url }) => console.log(`Server running in ${url}`));
