import React, { Component } from "react";
import "./HomePage.scss";
import { MainCard } from "../MainCard/MainCard";
import ArticleCard from "../ArticleCard/ArticleCard";
ArticleCard
export class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Relevant = (arr) => {
     
      return (
        <div className="cards">
          <ArticleCard elem={arr.arr[2]} />
          <ArticleCard elem={arr.arr[1]} />
          <ArticleCard elem={arr.arr[0]} />
        </div>
      );
    };
    return (
      <div className="container">
        {console.log(this.props.last3articles)}
        <h1>News</h1>
        <MainCard main={this.props.main} />
        <h1>Relevant</h1>
        <Relevant arr={this.props.last3articles}/>
      </div>
    );
  }
}

export default HomePage;
