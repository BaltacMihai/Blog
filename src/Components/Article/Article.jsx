import React, { Component } from "react";
import './Article.scss'
export class Article extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu">
        <h1>{"Article/" + this.props.data.name}</h1>
         <div className="container">
        
        
        <div className="article">
         <div className="details">
        
           <img src={this.props.data.img} alt="" />
           <h1>{this.props.data.name}</h1>
         <div className="date_author">
           <p>{this.props.data.author}</p>
         </div>
           <div className="text">
             {this.props.data.text}
           </div>

         </div>
         <div className="text">

         </div>
        </div>
        {console.log(this.props.data.name)}
      </div>
      </div>
     
    );
  }
}

export default Article;
