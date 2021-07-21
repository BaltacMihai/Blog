import { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
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
      return (
<div>
<Navbar />

<Switch>
  <Route path="/home" component = {Home} />
   <Route  path="/aboutus" component = {AboutPage} />

        {/* <Route exact path="/articles" component={()=> <Menu dishes ={this.state.dishes} />} />
         <Route path="/menu/:dishId" component={DishWithId} /> 
  
  <Route  exact path="/contactus" component = {Contact} /> */}
     
      <Redirect to="/home" />  
      </Switch>


      </div>
      )
      
  }
}




export default Main;
