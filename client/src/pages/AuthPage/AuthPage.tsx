import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import styles from './AuthPage.module.scss';

export const AuthPage: React.FC = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <Switch>
      <Route exact path={`${path}/sign-in`}>
        <Login />
      </Route>
      <Route exact path={`${path}/sign-up`}>
        <Registration />
      </Route>
      <Redirect to={`${path}/sign-in`} />
    </Switch>
  )
}