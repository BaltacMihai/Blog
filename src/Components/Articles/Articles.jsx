import React, { Component } from "react";
import Search from "../Search/Search";
import "./Articles.scss";
import ArticleCard from "../ArticleCard/ArticleCard";

const Cards = (props) => {
  return props.articles.map((article) => {
    if (props && props.filterName == null)
      return (
       
          <ArticleCard elem={article} />
       
      );
    else if (
      props.filterName != null &&
      article.name.toUpperCase().includes(props.filterName.toUpperCase())
    )
      return (
       
          <ArticleCard elem={article} />
    
      );
  });
};

export class Articles extends Component {
  constructor(props) {
    super(props);
    this.handleCharToSearch = this.handleCharToSearch.bind(this);
    this.state = {
      charToSearch: null,
      category: "",
    };
  }

  handleCharToSearch = (char2S) => {
    this.setState({ charToSearch: char2S });
  };

  render() {
    return (
      <div className="articles">
        <Search charToSearch={this.handleCharToSearch} />

        <div className="row">
          <Cards
            articles={this.props.data}
            filterName={this.state.charToSearch}
          />
        </div>
      </div>
    );
  }
}

export default Articles;
