import React, { Component } from "react";
import "./Navbar.scss";

import { NavLink } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="navbar" id="MyNavbar">
        <NavLink to="/home" id="home">
          Home
        </NavLink>
        <NavLink to="/aboutus">About this blog</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/contactus">Contact Us</NavLink>
      </div>
    );
  }
}
export default Navbar;
