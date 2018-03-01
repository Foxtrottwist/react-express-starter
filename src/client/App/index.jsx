import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Header from './Header';
import Dashboard from './Dashboard';
import Timers from './Timers';
import Todos from './Todos';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Header />

      <Route path="/" component={Dashboard} />
      <Route path="/timers" component={Timers} />
      <Route path="/todos" component={Todos} />
    </div>
  </BrowserRouter>
);

export default App;