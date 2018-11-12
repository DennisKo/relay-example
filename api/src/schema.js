const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    domains(language: Language): [Domain]!
    # Queries for the current user
    user(id: ID!): User
  }

  type Domain {
    id: ID!
    url: String
    icon: FavIcon
    language: Language
  }
  type FavIcon {
    id: ID!
    data: String
  }

  type User {
    id: ID!
    email: String!
    domains(language: Language): [Domain]!
  }

  enum Language {
    DE_DE
    EN_US
    EN_GB
  }
`;

module.exports = typeDefs;
