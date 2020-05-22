import React from 'react';
// import './App.css';
import {BrowserRouter as Router ,Route,Link,Switch} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
     <Router>
       <div>
       <ul>
        < Link to="/"></Link>
      </ul>
      <Switch>
      <Route exact path ='/' component = {Home}/>
      <Route exact path ='/Home' component = {Home}/>
      <Route exact path ='/Login' component = {Login}/>
      <Route exact path ='/Signup' component = {Signup}/>

      </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
