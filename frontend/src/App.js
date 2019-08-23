import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/SignIn" exact component={SignIn}></Route>
          <Route path="/SignUp" exact component={SignUp}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
