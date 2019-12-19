import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";

const MyMapComponent = compose(
  withProps({
    googleMapURL:  "https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
}),
withScriptjs,
withGoogleMap
)

(props => (
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: 40.666885, lng: -73.973823}}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 40.666885, lng: -73.973823 }} />
    )}
  </GoogleMap>
));



class Contact extends Component {
  render() {
    return(
    <div id="contactBody">
      <div id="mapBanner">
        <MyMapComponent isMarkerShown/>
      </div>
      <div id="contactInfo">
        <a href="https://www.muzosa.com/contact" target="_blank" ><h1>Contact us to try a free class!</h1></a>
        <div className='type' >LOCATION:Training takes place from 7:00 pm-9:00 pm on the porch and surrounding grounds of Litchfield Villa in Prospect Park</div>
        <img src={require('./img/Photos/647.jpg')} />
      </div>
    </div>
    )
  }
}

export default Contact;
