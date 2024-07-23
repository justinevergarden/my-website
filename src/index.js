import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharactersListPage from './pages/CharactersListPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import CharactersByLocationPage from './pages/CharactersByLocationPage';
import './index.css';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/" exact component={CharactersListPage} />
        <Route path="/character/:id" component={CharacterDetailPage} />
        <Route path="/locations" component={CharactersByLocationPage} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);