const todos = [
  { id: 1, title: 'Learn GraphQL', completed: false },
  { id: 2, title: 'Learn TypeScript', completed: false },
  { id: 3, title: 'Read: Eloquent Javascript', completed: false },
  { id: 4, title: 'Dishes', completed: false },
  { id: 5, title: 'Play Minecraft', completed: false },
  { id: 6, title: 'Take the cats out for a walk', completed: true },
  { id: 7, title: 'Workout', completed: false },
];

const timers = [
  {
    id: 8,
    title: 'Studying Apollo API',
    start: 'start',
    finish: 'finish',
    duration: 'duration',
  },
  {
    id: 9,
    title: 'Chores',
    start: 'start',
    finish: 'finish',
    duration: 'duration',
  },
  {
    id: 10,
    title: 'Landing Site',
    start: 'start',
    finish: 'finish',
    duration: 'duration',
  },
  {
    id: 11,
    title: 'Paperwork',
    start: 'start',
    finish: 'finish',
    duration: 'duration',
  },
  {
    id: 12,
    title: 'Client Meeting',
    start: 'start',
    finish: 'finish',
    duration: 'duration',
  },
];

let newID = 12;

const resolvers = {
  Query: {
    todos() {
      return todos;
    },

    timers() {
      return timers;
    },
  },
  Mutation: {
    addTodo(root, args) {
      const newTodo = { id: (newID += 1), title: args.title, completed: false };
      todos.push(newTodo);
      return newTodo;
    },

    createTimer(root, args) {
      const newTimer = {
        id: (newID += 1),
        title: args.title,
        start: args.start,
        finish: args.finish,
        duration: args.duration,
      };
      timers.push(newTimer);
      return newTimer;
    },
  },
};

module.exports = resolvers;
