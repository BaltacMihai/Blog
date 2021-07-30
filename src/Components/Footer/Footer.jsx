import React, { Component } from "react";
import './Footer.scss'
import linkedin from './../../logos/linkedin.png'
import github from './../../logos/github.png'
import portfolio from './../../logos/portfolio.png'
export class Footer extends Component {
  render() {
    return (
      <div className="flex-column">
        
        <div className="flex-row">
          <a href="https://github.com/BaltacMihai"><img src={github} alt="GitHub" className="logo"/></a>
            <a href="https://baltacmihai.github.io/"><img src={portfolio} alt="Portfolio" className="logo"/></a>
            <a href="https://www.linkedin.com/in/baltac-mihai-cristian/">
              <img src={linkedin} alt="LinkedIn" className="logo"/></a>
           
        </div>
        <div className="top">
         
         <p>Copyright© 2021 Baltac Mihai-Cristian Blog. All Rights Reserved </p>
        </div>
      </div>
    );
  }
}

export default Footer;
