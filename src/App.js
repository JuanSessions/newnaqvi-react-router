
import React, { useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { BrowserRouter, Link, Route } from "react-router-dom"


function App() {
  const [count,setCount] =useState(0)
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My React App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
       {/*  <Route path="/" exact component={Home}/> */}
      {/*  <Route path="/" exact render={(props)=><Home {...props}/>} /> */}
        <Route path="/" exact>
        <Home /> 
        </Route>
        <Route path="/contact" exact >
          <Contact/>
        </Route>
        <Route path="/about" exact>
          <About count={count}/> 
        </Route>

        {/*  <Home/>
    <Contact/>
    <About/> */}
      </div>
    </BrowserRouter>
  );
}


export default App;