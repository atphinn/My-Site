import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose";

const MyMapComponent = compose(
  withProps({
    googleMapURL:  "https://maps.googleapis.com/maps/api/js?key=AIzaSyByVYdAAV-bsEE8Qugi0RrJCn2m_5kMpI4&v=3.exp&libraries=geometry,drawing,places",
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
        <a href="https://www.muzosa.com/contact" target="_blank" ><h1>Contact use to try a free class!</h1></a>
          <img src={'https://lh3.googleusercontent.com/w3pImt8e0Onm3ukwjrOGTroVKeHokL1YWUHhyXlrgQIk6JV1VxbKg7qOEGnqXD0iDa6HLmE7bZL_liRV294HHe6LWMFLixEVtOHR74sH4edwTM0aTwXix7uotSgUZu04TwjITgl78ZLza2q84T6sh52DLOgcsMy8Mh9UF4mCpHTqXPlsDp-9-GEV5IhdoT_1SNXrsHFkziZjb_QItMY9zbek8sgftdP2KEQmt5XsSwK2itK0Jv7njEYnfi0jH4ahxTSkptMsuA7P8xKOF2Tbr5Yvqao1wz4ZyQgOnIudexw9L8dqtYB1YC7aDH2YexG2lbPyhB4ex4qngSw8SCfxEfSqBRXuNO-KwDRZAFVH6aRkN7IV4-j74bWn9hqQ9i60jHdsCEjyjCb_axL3yw4rOk5ux5d12PeanBLKpYLw0S2l4wugWAxBWZgQvZjBMkGiLVEcwXNrhsESFJ0ghWvuCrR8szgx72eTGnIYUFWeedr44lAN0uP5pPgg6aeOgTllQ1YRkqe3A-oOXcPKAu-zGaToFfFf7Qg3mxbOJ4ePlFrTaSnc6AmUjnayl4d0-DCXQ6F1figAbeAgEKa_iycgVF-UYXECv7_Ha1BLkFGo=w883-h662-no'} alt="jumbotron" id="img-contact" />

      </div>
    </div>
    )
  }
}

export default Contact;
