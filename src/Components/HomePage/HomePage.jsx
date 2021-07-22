import React, { Component } from "react";
import "./HomePage.scss";
import { MainCard } from "../MainCard/MainCard";
export class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    
    return (
      <div className="container">
        {console.log(this.props.main)}
        <h1>News</h1>
        <MainCard main = {this.props.main}/>
        
      </div>
    );
  }
}

export default HomePage;
