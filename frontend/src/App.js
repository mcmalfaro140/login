import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import brokenLink from '../src/components/404'
import welcome from './components/welcome'
import { ProtectedRoute } from "./components/protected.route";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/SignIn" exact component={SignIn}></Route>
          <Route path="/SignUp" exact component={SignUp}></Route>
          {/* <Route path="/welcome" exact component={welcome}></Route> */}
          <ProtectedRoute exact path="/welcome" component={welcome} />
          <Route path="*" component={brokenLink} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
