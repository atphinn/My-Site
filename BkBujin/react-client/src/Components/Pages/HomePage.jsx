import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose";


class HomePage extends Component {

  render() {
    return(
    <div id="mainBody">
      <div id="mainBanner">
        <img src={require('./img/Photos/about.jpg')} alt="jumbotron" className="img-responsive" />
      </div>
    </div>
    )
  }
}

export default HomePage;
