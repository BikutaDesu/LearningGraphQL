import { GraphQLScalarType } from "graphql";

const userResolvers = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "Date string in ISO-8601 format",
    // serialize converte os dados que venham de alguma base
    serialize: (value: Date) => value.toISOString(),
    // converte valores que vem de variáveis
    parseValue: (value: string) => new Date(value),
    // converte valores que vem de argumento inline
    parseLiteral: (ast: any) => new Date(ast.value),
  }),
  Query: {
    users: async (root, args, { dataSources }) =>
      dataSources.usersAPI.getUsers(),
    user: async (root, { id }, { dataSources }) =>
      dataSources.usersAPI.getUser(id),
  },
  Mutation: {
    addUser: async (root, user, { dataSources }) =>
      dataSources.usersAPI.addUser(user),
    updateUser: async (root, user, { dataSources }) =>
      dataSources.usersAPI.updateUser(user),
    deleteUser: async (root, { id }, { dataSources }) =>
      dataSources.usersAPI.deleteUser(id),
  },
};

export default userResolvers;
