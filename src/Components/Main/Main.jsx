import { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import Article from '../Article/Article';
import {Switch, Route, Redirect} from 'react-router-dom';
import {DATA} from "../../shared/articles";
class Main extends Component{
constructor(props)
{
  super (props);
  this.state = {
    articles: DATA
  }
 
}

  render() {
    const Home = () =>
    {
return (
  <div>
    <HomePage main ={this.state.articles[this.state.articles.length-1]}/>
   
  </div>
)
    }
    const ArticleWithId = ({match}) =>
    {
      return (
        <Article data = {this.state.articles.filter((article)=> article.id ===parseInt(match.params.id,10))[0]} />
      )
     
    }
      return (
<div>
<Navbar />

<Switch>
  <Route path="/home" component = {Home} />
   <Route  path="/aboutus" component = {AboutPage} />

         <Route exact path="/articles" component={()=> <Menu dishes ={this.state.dishes} />} />
         <Route path="/articles/:id" component={ArticleWithId} /> 
  
  {/*<Route  exact path="/contactus" component = {Contact} /> */}
     
      <Redirect to="/home" />  
      </Switch>


      </div>
      )
      
  }
}




export default Main;
