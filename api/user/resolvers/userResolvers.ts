const userResolvers = {
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
