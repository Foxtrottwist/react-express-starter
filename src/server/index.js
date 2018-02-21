require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const morgan = require('morgan');
const compression = require('compression');

const schema = require('./data/schema');

// eslint-disable-next-line
const PORT = process.env.PORT,
  app = express();

app.use(morgan('combined'));
app.use(compression());
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send(`Go to http://localhost:${PORT}/graphiql`);
  });
}

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line
  console.log(`Listening on port ${PORT}`);
});
