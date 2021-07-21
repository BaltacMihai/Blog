import React, { Component } from "react";
import "./HomePage.scss";
export class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        {console.log(this.props.main)}
        <h1>News</h1>

        <div className="card">
          <div className="row">
            <div className="left">
              <h2>{this.props.main.name}</h2>
             
              <p>{this.props.main.description}</p>
            </div>
            <div className="right">
              <img src={this.props.main.img} alt={this.props.main.name} />
            </div>
          </div>
          <div className="creation">
          <p>{this.props.main.author}</p>
          <p>{this.props.main.date}</p>
          
          </div>
          
        </div>
      </div>
    );
  }
}

export default HomePage;
