import '../../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import { config } from '../../config';

import { HashRouter as Router, Route, Switch, IndexRoute, hashHistory } from 'react-router-dom';

import About from '../../views/about';
import Home from '../../views/home';
import Login from '../../views/login';

window.jQuery = window.$;

document.title = config.siteTitle;

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/login" component={ Login } />
    </Switch>
  </Router>,
  document.getElementById('root')
);

module.hot.accept();
