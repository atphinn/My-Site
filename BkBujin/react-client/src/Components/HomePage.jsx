import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return(
    <div id="mainBody">
      <div id="mainBanner">
        <img src={require('/img/Photos/about1.jpg')} alt="jumbotron" className="img-responsive"/>
      </div>
      <div id="bujinBanner"></div>
      <div id="mapBanner"></div>
    </div>
    )
  }
}

export default HomePage;
