import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Footer.scss'
export class Footer extends Component {
  render() {
    return (
      <div className="flex-row">
        <div className="left">
         
          <NavLink to="/home" id="home">
            Home
          </NavLink>
          <NavLink to="/aboutus">About this blog</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </div>
        <div className="right">
            <a href="https://github.com/BaltacMihai">Github</a>
            <a href="https://baltacmihai.github.io/">Portfolio</a>
            <a href="https://www.linkedin.com/in/baltac-mihai-cristian/">LinkedIn</a>
        </div>
      </div>
    );
  }
}

export default Footer;
