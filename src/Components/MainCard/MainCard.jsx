import React, { Component } from 'react'
import Article from '../Article/Article';
import {Link} from 'react-router-dom';
import './MainCard.scss'
export class MainCard extends Component {
    render() {
        return (
            <div className="card" >
          <div className="row">
            <div className="left">
              <h2>{this.props.main.name}</h2>
              <p>{this.props.main.description}</p>
              <Link to={`/articles/${this.props.main.id}`} onClick={()=>{<Article data= {this.props.main}/>} }>See More</Link>
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
        )
    }
}

export default MainCard
