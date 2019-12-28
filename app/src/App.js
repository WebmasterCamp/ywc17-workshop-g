import React, { Profiler } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import LandingPage from './landing/Landing';
import Hire from './hire/Hire';
import './index.css';
import Search from './search/Search';
import { Navbar } from 'react-bootstrap';
import Profile from './profile/Profile';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Brand</Navbar.Brand>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/hire">
            <Hire />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
