import React, { Component } from "react";

export class Article extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {console.log(this.props.data.name)}
      </div>
    );
  }
}

export default Article;
