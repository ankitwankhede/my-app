import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Button from 'react-bootstrap/Button';
import {Register} from './Components/Register'
import {Search} from './Components/Search'
import {BrowserRouter,Route,Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="container">

    <h6> hi there</h6>
        <Switch>
          <Route path='/Register' component={Register} exact/>
          <Route path='/Search' component={Search} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
