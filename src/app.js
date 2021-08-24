import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: '/' });

const Blog = React.lazy(() => import('./views/blog'));
const Landing = React.lazy(() => import('./views/landing'));
const Shop = React.lazy(() => import('./views/shop'));

const App = () => {
  return (
    <Router history={history}>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/shop" exact component={Shop} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

const appNode = document.getElementById('app');

ReactDOM.render(<App />, appNode);
