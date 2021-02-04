import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import history from './history';
import './global/styles/index.scss';

const App = () => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <div className="App">
      <div className={'theme ' + (theme ? 'theme--dark' : 'theme--default')}>
        Init
        <button className="button" onClick={() => setTheme((prev) => !prev)}>Change theme</button>
      </div>
      <Router history={history}>
        <Switch>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
