import React from 'react';
// import './App.css';
import {BrowserRouter as Router ,Route,Link,Switch} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payments from './Components/payments/Payments';

function App() {
  return (
    <div className="App">
     <Router className="App">
       
      <Switch>
      <Route exact path ='/' component = {Home}/>
      <Route exact path ='/Home' component = {Home}/>
      <Route exact path ='/Login' component = {Login}/>
      <Route exact path ='/Signup' component = {Signup}/>
      <Route exact path ='/Cart' component = {Cart}/>
      <Route exact path ='/payment' component = {Payments}/>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
