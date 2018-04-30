import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose";


class HomePage extends Component {

  render() {
    return(
    <div id="mainBody">
      <div id="mainBanner">
        <img src={'https://i.ytimg.com/vi/0pXLm4Ao6-w/maxresdefault.jpg'} alt="jumbotron" className="img-responsive"/>
      </div>
    </div>
    )
  }
}

export default HomePage;
