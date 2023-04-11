import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById("root"));
Index.js
import React from 'react'
import Home from './Home'
import NavBar from './NavBar';
import Singers from './Singers';
import Albums from './Albums';

import { Route,Routes } from 'react-router-dom';


export default function App() {
  return (
    <> 
      <div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
      </div>
    </>
  )
}
App.jsx

Home.js

Navbar.js

Singers.js

Albums.js