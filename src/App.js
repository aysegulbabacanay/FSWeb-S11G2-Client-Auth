import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from "react-router";
import Login from './Login';
import List from './List';
import Logout from "./Logout";
import AddFriend from './AddFriend';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <h1>FRIENDS DATABASE</h1>
          <nav className='navs'>
            <NavLink to="/login">LOGIN.</NavLink>
            <NavLink to="/friends" exact>FRIENDLIST.</NavLink>
            <NavLink to="/friends/add">ADDFRIEND.</NavLink>
            <NavLink to="/logout">LOGOUT.</NavLink>
          </nav>
        </header>
        <div className='content'>
          <Switch>
            <Route path="/login"><Login /></Route>
            <PrivateRoute path='/friends' component={List} exact />
            <PrivateRoute path='/friends/add' component={AddFriend} />
            <PrivateRoute path="/Logout" component={Logout} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;