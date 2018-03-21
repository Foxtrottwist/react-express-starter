import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Header, Heading, Error, Form, Label, Input, Row, Button } from './styles';

const SERVER_QUERY = gql`
  query {
    greeting {
      welcome
    }
  }
`;

const CLIENT_QUERY = gql`
  query {
    clientGreeting @client
  }
`;

const SERVER_MUTATION = gql`
  mutation changegGreeting($welcome: String!) {
    changeGreeting(welcome: $welcome) {
      welcome
    }
  }
`;

const CLIENT_MUTATION = gql`
  mutation changeClientGreeting($clientGreeting: String!) {
    changeClientGreeting(clientGreeting: $clientGreeting) @client
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      serverGreeting: '',
      clientGreeting: '',
    };

    this.handleServerInputChange = this.handleServerInputChange.bind(this);
    this.handleClientInputChange = this.handleClientInputChange.bind(this);
  }

  handleServerInputChange(event) {
    const serverGreeting = event.target.value;
    this.setState(() => ({ serverGreeting }));
  }

  handleClientInputChange(event) {
    const clientGreeting = event.target.value;
    this.setState(() => ({ clientGreeting }));
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <Heading>Hello React</Heading>
          <Query query={SERVER_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <Heading>Loading...</Heading>;
              if (error) return <Error>Error: No GraphQL here :(</Error>;

              return <Heading>{data.greeting.welcome}</Heading>;
            }}
          </Query>

          <Query query={CLIENT_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <Heading>Loading...</Heading>;
              if (error) return <Error>Error: No Apollo State here :(</Error>;

              return <Heading>{data.clientGreeting}</Heading>;
            }}
          </Query>
        </Header>

        <Row>
          <Mutation mutation={SERVER_MUTATION}>
            {changeGreeting => (
              <Form
                onSubmit={(event) => {
                  event.preventDefault();
                  changeGreeting({
                    variables: { welcome: this.state.serverGreeting },
                    refetchQueries: [{ query: SERVER_QUERY }],
                  });
                  this.setState(() => ({ serverGreeting: '' }));
                }}
              >
                <Label>Server Greeting:</Label>
                <Input value={this.state.serverGreeting} onChange={this.handleServerInputChange} />
                <Button>Server Greeting</Button>
              </Form>
            )}
          </Mutation>

          <Mutation mutation={CLIENT_MUTATION}>
            {changeClientGreeting => (
              <Form
                onSubmit={(event) => {
                  event.preventDefault();
                  changeClientGreeting({
                    variables: { clientGreeting: this.state.clientGreeting },
                    refetchQueries: [{ query: CLIENT_QUERY }],
                  });
                  this.setState(() => ({ clientGreeting: '' }));
                }}
              >
                <Label>Client Greeting:</Label>
                <Input value={this.state.clientGreeting} onChange={this.handleClientInputChange} />
                <Button>Server Greeting</Button>
              </Form>
            )}
          </Mutation>
        </Row>
      </React.Fragment>
    );
  }
}

export default App;
