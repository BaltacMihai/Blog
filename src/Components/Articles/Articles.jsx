import React, { Component } from "react";
import Search from "../Search/Search";
import "./Articles.scss";
import ArticleCard from "../ArticleCard/ArticleCard";

const Cards = (props) => {
  return props.articles.map((article) => {
    //dispaly all cards ( didn't applied any filter)
    if (
      props &&
      props.filterName == null &&
      props.categ.toUpperCase() == "ALL"
    )
      return <ArticleCard elem={article} />;

      // display the cards when category is pressed
     else if (
        props.filterName == null &&
        article.tag.toUpperCase() == props.categ.toUpperCase()
      )
        return <ArticleCard elem={article} />;

    //display searched element
    else if (
      props.filterName != null &&
      article.name.toUpperCase().includes(props.filterName.toUpperCase())
      &&
      props.categ.toUpperCase() == "ALL"
    )
      return <ArticleCard elem={article} />;
      
      else if (
        props.filterName != null &&
        article.name.toUpperCase().includes(props.filterName.toUpperCase())
        &&
        article.tag.toUpperCase() == props.categ.toUpperCase()

      )
        return <ArticleCard elem={article} />;
    });
};

export class Articles extends Component {
  constructor(props) {
    super(props);
    this.handleCharToSearch = this.handleCharToSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.state = {
      charToSearch: null,
      category: "all",
    };
  }

  handleCharToSearch = (char2S) => {
    this.setState({ charToSearch: char2S });
  };
  handleCategory = (categ) => {
    this.setState({ category: categ });

    console.log(this.state);
  };

  render() {
    return (
      <div className="articles">
        <Search
          charToSearch={this.handleCharToSearch}
          category={this.handleCategory}
        />

        <div className="row">
          <Cards
            articles={this.props.data}
            filterName={this.state.charToSearch}
            categ={this.state.category}
          />
        </div>
      </div>
    );
  }
}

export default Articles;
