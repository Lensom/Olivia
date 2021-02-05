import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import history from './history';
import './global/styles/index.scss';

const App = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const switchTheme = () => setTheme(prev => !prev);

  return (
    <div className={'root theme ' + (theme ? 'theme--dark' : 'theme--default')}>
      <Router history={history}>
        <Switch>
          <MainLayout onChangeTheme={switchTheme}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
