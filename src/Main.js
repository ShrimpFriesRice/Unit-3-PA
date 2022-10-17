import React, { Component } from "react";
import {
  Route, 
  Routes, 
  NavLink, 
  HashRouter
} from "react-router-dom";
import Stuff from "./Stuff";
import Home from "./Home";
import Picture from "./Picture";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Unit 4 Perfromance Assessment</h1>
          <Picture />
          <ul className="header">
            <li><NavLink to="/">Hints</NavLink></li>
            <li><NavLink to="/stuff">The Solution</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/stuff" element={<Stuff />}/>
          </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;