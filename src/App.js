import React from "react";
// import Home from "./routers/Home";
import './styles/App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./routers/About";
import Home from "./routers/Home";
import Navigation from "./components/Navigation";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/' exact={true} Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App;
