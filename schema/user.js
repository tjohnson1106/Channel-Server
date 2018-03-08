export default `
type User {
    id: Int!
    email: String!
    password: String!
    messages: Message!
    teams: [Team!]!
}

type Query {
    getUser(id: Int!): User!
    allUsers(id: Int!): [User!]!
}

type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
}
`;
