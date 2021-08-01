import React, { Component } from "react";
import search from "./../../logos/search.png";
import "./Search.scss";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.searchFunction = this.searchFunction.bind(this);
  }

  searchFunction() {
    const value = document.getElementById("search").value;
    if (this.props.charToSearch != undefined) {
      this.props.charToSearch(value);
    } else {
      this.props.charToSearch(null);
    }
  }
  render() {
    return (
      <div className="main-search">
        <div className="container-search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search by list name"
            onKeyUp={this.searchFunction}
          ></input>
          <img src={search} alt="search_icon" className="search_icon" />
        </div>
        <div className="justify-space">
        <button id="all">All</button>
        <button id="tech">Tech</button>
        <button id="edu">Education</button>
        <button id="mot">Motivational</button>
        </div>
        
      </div>
    );
  }
}

export default Search;
