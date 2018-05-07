import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{
  render(){
    return(
      <header>
        <li id="logo">
          <Link to="">
            <img src={'http://emblemsbf.com/img/3040.jpg'} alt="Muzosa" className="img-responsive" style={{height: "3em"}}/>
          </Link>
        </li>
        <ul id="headerButtons">
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
      </header>
    )
  }
}

export default NavBar;
