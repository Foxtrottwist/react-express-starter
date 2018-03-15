const greeting = { welcome: 'Hello GraphQL!' };

const resolvers = {
  Query: {
    greeting() {
      return greeting;
    },
  },

  Mutation: {
    changeGreeting(root, args) {
      greeting.welcome = args.welcome;
      return greeting;
    },
  },
};

module.exports = resolvers;
