import React from 'react';
import Item from './pages/Item/Item';
import Designer from './pages/Designer/Designer';
import Feed from './pages/Feed/Feed';
import Login from './pages/Login/Login';
import Path from './pages/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Item />
        </Route>
        <Route path="/designer">
            <Designer />
        </Route>
        <Route path="/feed">
            <Feed />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/post">
          <Path/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
