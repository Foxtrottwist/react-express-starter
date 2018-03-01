const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
type Todo {
    id: Int,
    title: String,
    completed: Boolean
}
    type Query {
        todos: [Todo]
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
