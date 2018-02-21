const resolvers = {
  Query: {
    greeting() {
      return 'Hello GraphQL!';
    },
  },
};

module.exports = resolvers;
