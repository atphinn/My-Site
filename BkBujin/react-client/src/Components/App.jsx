import React, { Component } from  'react';
import { Browser as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path ="/" component={HomePage} />
          <Route name="navBar" exact path ="/" component={NavBar} />
          <Route name="footer" exact path ="/" component={Footer} />
        </div>
      </Router>
    )
  }
}

export default App;
