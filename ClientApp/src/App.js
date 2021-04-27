import React from 'react';
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import './styles/App.css'
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Header />
      <div className="budgetIE-content">
        <Switch>
          <Route path="/expenses/tracker">
            <div><h2>Expense Tracker</h2></div>
          </Route>
          <Route path="/expenses/budgets">
            <div><h2>Budgets</h2></div>
          </Route>
          <Route path="/user/login">
            <Login />
          </Route>
          <Route path="/user/register">
            <Register />
          </Route>
          <Route path="/user/logout">
            <div><h2>Logout</h2></div>
          </Route>
          <Route path="/user/profile">
            <div><h2>Profile</h2></div>
          </Route>
          <Route path="/">
          <div><h2>Home</h2></div>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;