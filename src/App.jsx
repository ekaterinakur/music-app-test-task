import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Container from './components/Container';
import AlbumList from './components/AlbumList';
import SongList from './components/SongList';
import NoMatch from './components/NoMatch';

const App = () => (
  <Container>
      <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Redirect exact from='/' to="/albums" />
        <Route exact path='/albums' >
          <AlbumList />
        </Route>
        <Redirect exact from='/albums/:albumId' to="/albums/:albumId/songs" />
        <Route path='/albums/:albumId/songs' >
          <SongList />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </HashRouter>
  </Container>
);

export default App;
