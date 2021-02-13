import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import history from './history';
import './global/styles/index.scss';

const App = () => {
  const [theme, setTheme] = useState<boolean>(true);
  const switchTheme = () => setTheme(prev => !prev);

  return (
    <div className={'root theme ' + (theme ? 'dark' : 'light')}>
      <Router history={history}>
        <Switch>
          <MainLayout onChangeTheme={switchTheme}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/auth" component={AuthPage} />
            </Switch>
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
