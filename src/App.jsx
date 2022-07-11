import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Container from './components/Container';
import AlbumList from './components/AlbumList';
import SongList from './components/SongList';
import NoMatch from './components/NoMatch';

const App = () => (
  <Container>
    <Router>
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
    </Router>
  </Container>
);

export default App;
