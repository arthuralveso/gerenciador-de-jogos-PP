import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Details from './pages/Details'
import CreateGame from './pages/CreateGame'
import ListGame from './pages/ListGame'

// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/games" component={ListGame} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="/details/edit/:id" component={CreateGame} />
        <Route path="/create" component={CreateGame} />
      </Switch>
    </BrowserRouter>
  );
}
