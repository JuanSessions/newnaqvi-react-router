
import React, { useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { BrowserRouter, NavLink, Route,Switch } from "react-router-dom"


function App() {
  const [count,setCount] =useState(0)
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My React App</h1>
        <ul>
          <li>
            <NavLink activeStyle={{color:"red"}} to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{color:"red"}} to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{color:"red"}} to="/about">About</NavLink>
          </li>
        </ul>
       {/*  <Route path="/" exact component={Home}/> */}
      {/*  <Route path="/" exact render={(props)=><Home {...props}/>} /> */}
       <Switch>
        <Route path="/home" >
        <Home /> 
        </Route>
        <Route path="/contact" >
          <Contact/>
        </Route>
        <Route path="/about" >
          <About /> 
        </Route>
        
        </Switch>

        {/*  <Home/>
    <Contact/>
    <About/> */}
      </div>
    </BrowserRouter>
  );
}


export default App;