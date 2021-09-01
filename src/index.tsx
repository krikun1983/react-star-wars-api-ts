import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'react-uuid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/header';
import routesConfig from 'routes/routesConfig';
import Routing from 'types/routing';
import { Provider } from 'react-redux';
import store from 'store';
import 'assets/scss/app.scss';
import { ThemeProvider } from 'context/theme-provider';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <div className="wrapper">
          <Header />
          <Switch>
            {routesConfig.map((route: Routing): JSX.Element => {
              return <Route key={uuid()} path={route.path} exact={route.exact} component={route.component} />;
            })}
          </Switch>
        </div>
      </Router>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
