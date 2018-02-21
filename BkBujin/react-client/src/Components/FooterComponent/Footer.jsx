import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render(){

    return(
      <footer>
        <div>
        <ul id="footerButtons">
          <li className="navButton">
            <Link to="">Home</Link>
          </li>
          <li className="navButton">
            <Link to="/About">About</Link>
          </li>
          <li className="navButton">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="navButton" >
            <a href="http://www.muzosa.com" target="_blank" >Muzosa Bujinkan Dojo</a>
        </li>
        </ul>
        <div id="social">
          <a href="http://tinyurl.com/yck2hfu" target="_blank" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
        </div>
      </div>
      </footer>
    )
  }
}


export default Footer;
