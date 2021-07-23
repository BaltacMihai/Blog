import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Article from '../Article/Article';
import './ArticleCard.scss'
export class ArticleCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="articleCard">
                <img src={this.props.elem.img} alt={this.props.elem.name}  />
                <div className="description">
                <h2>{this.props.elem.name}</h2>
                <p>{this.props.elem.description}</p>
                </div>
                <Link to={`/articles/${this.props.elem.id}`} onClick={()=>{<Article data= {this.props.elem}/>} }>See More</Link>
                
            </div>
        )
    }
}

export default ArticleCard
