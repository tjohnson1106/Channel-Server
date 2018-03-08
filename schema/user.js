export default `
type User {
    id: Int!
    email: String!
    password: String!
    messages: Message!
    teams: [Team!]!
}
`;
