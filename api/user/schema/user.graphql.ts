import { gql } from "apollo-server";

const userSchema = gql`
  scalar DateTime

  type User {
    id: ID!
    name: String!
    active: Boolean!
    email: String
    role: Role!
    createdAt: DateTime
  }

  type Role {
    id: ID!
    type: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User!
  }

  type Mutation {
    addUser(
      name: String!
      email: String
      active: Boolean!
      role: String!
      createdAt: DateTime
    ): User!
    updateUser(
      id: ID!
      name: String!
      email: String
      active: Boolean!
      role: String!
    ): User!
    deleteUser(id: ID!): ID!
  }
`;

export default userSchema;
