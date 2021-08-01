import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import Article from "../Article/Article";
import { Switch, Route, Redirect } from "react-router-dom";
import { DATA } from "../../shared/articles";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../functions/ScrollToTop";
import Articles from "../Articles/Articles";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: DATA,
    };
  }

  render() {
    const last3elements = this.state.articles.slice(
      Math.max(this.state.articles.length - 4, 1)
    );
    last3elements.pop();
    const Home = () => {
      return (
        <div>
          <HomePage
            main={this.state.articles[this.state.articles.length - 1]}
            last3articles={last3elements}
          />
        </div>
      );
    };
    const ArticleWithId = ({ match }) => {
      return (
        <Article
          data={
            this.state.articles.filter(
              (article) => article.id === parseInt(match.params.id, 10)
            )[0]
          }
        />
      );
    };
    return (
      <div className="main">
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/aboutus" component={AboutPage} />

          <Route
            exact
            path="/articles"
            component={() => <Articles data = {this.state.articles}/>}
          />
          <Route path="/articles/:id" component={ArticleWithId} />

          {/*<Route  exact path="/contactus" component = {Contact} /> */}

          <Redirect to="/home" />
        </Switch>
        <Footer />
        
      </div>
    );
  }
}

export default Main;
