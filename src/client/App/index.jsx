import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Header from './Header';
import Dashboard from './Dashboard';
import Timers from './Timers';
import Todos from './Todos';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navigation />
      <Header />

      <Route exact path="/" component={Dashboard} />
      <Route exact path="/timers" component={Timers} />
      <Route exact path="/todos" component={Todos} />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
