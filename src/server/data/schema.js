const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
type Todo {
    id: Int
    title: String
    completed: Boolean
}

type Timer {
    id: Int
    title: String
    start: String
    finish: String
    duration: String
}

    type Query {
        todos: [Todo]
        timers: [Timer]
    }

    type Mutation {
        addTodo(title: String!): Todo
        
        createTimer(title: String!, start: String, finish: String, duration: String): Timer
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
