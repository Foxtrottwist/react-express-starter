const todos = [
  { id: 1, title: 'Learn GraphQL', completed: false },
  { id: 2, title: 'Learn TypeScript', completed: false },
  { id: 3, title: 'Read: Eloquent Javascript', completed: false },
  { id: 4, title: 'Dishes', completed: false },
  { id: 5, title: 'Play Minecraft', completed: false },
  { id: 6, title: 'Take the cats out for a walk', completed: true },
  { id: 7, title: 'Workout', completed: false },
];

const resolvers = {
  Query: {
    todos() {
      return todos;
    },
  },
};

module.exports = resolvers;
