const userResolvers = {
  Query: {
    users: async (root, args, { dataSources }) =>
      dataSources.usersAPI.getUsers(),
    user: async (root, { id }, { dataSources }) =>
      dataSources.usersAPI.getUser(id),
  },
};

export default userResolvers;
