const greeting = { greeting: 'Hello GraphQL!' };

const resolvers = {
  Query: {
    greeting() {
      return greeting;
    },
  },
};

module.exports = resolvers;
