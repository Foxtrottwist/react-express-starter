const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
    type Greeting {
        greeting: String
    }

    type Query {
        greeting: Greeting
    }

    type Mutation {
        changeGreeting(greeting: String!): Greeting
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
