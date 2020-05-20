import React from 'react';
// import './App.css';
import {BrowserRouter as Router ,Route,Link,Switch} from "react-router-dom";
import Home from './Home';

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

      </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
