import { gql } from "apollo-server";

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    active: Boolean!
    email: String
    role: Role!
  }

  type Role {
    id: ID!
    type: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User!
  }
`;

export default userSchema;
