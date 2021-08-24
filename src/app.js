import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Blog from './views/blog';
import Landing from './views/landing';
import Shop from './views/shop';

const history = createBrowserHistory({ basename: '/' });

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </Router>
  );
};

const appNode = document.getElementById('app');

ReactDOM.render(<App />, appNode);
