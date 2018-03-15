const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
    type Greeting {
        welcome: String
    }

    type Query {
        greeting: Greeting
    }

    type Mutation {
        changeGreeting(welcome: String!): Greeting
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
