import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Button from 'react-bootstrap/Button';
import Register from './Components/Register'
import Search from './Components/Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h6> hi there</h6>
        <Routes>
          <Route path='Register' element={<Register />}>
            <Route path='Search' element={<Search />} />
          </Route>
          <Route path='Search' element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
