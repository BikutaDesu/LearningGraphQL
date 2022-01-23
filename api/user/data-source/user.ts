import { RESTDataSource } from "apollo-datasource-rest";

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000";
  }

  async getUsers() {
    const users = await this.get("/users");
    return users.map(async (user) => ({
      ...user,
      role: await this.get(`/roles/${user.role}`),
    }));
  }

  async getUser(id) {
    const user = await this.get(`/users/${id}`);

    return {
      ...user,
      role: await this.get(`/roles/${user.role}`),
    };
  }
}

export default UsersAPI;
