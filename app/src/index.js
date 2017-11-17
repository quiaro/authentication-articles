import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import LoginCallback from './LoginCallback';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/callback" component={LoginCallback} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
