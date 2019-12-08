import React from "react"
import { Link } from "gatsby"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Layout from "../components/layout"
import SEO from "../components/seo"


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 40.666885, lng: -73.973823 }}
  >
    <Marker
      position={{ lat: 40.666885, lng: -73.973823 }}
    />
  </GoogleMap>
));

const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div id="map">
    <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
    </div>

    <div id="contactBody">
        <div id="contactInfo">
        <a href="https://www.muzosa.com/contact" target="_blank" >
          <h1>Contact us to try a free class!</h1>
        </a>
        <p>LOCATION:Training takes place from 7:00 pm-9:00 pm on the porch and surrounding grounds of Litchfield Villa in Prospect Park</p>
        <p>Take the F train to 9th ave and walk to 5th street</p>
        <img src={require('../images/IMG_5709.jpg')} alt="Litchfield villa" className="img-responsive" />
      </div>
    </div>
    <script>
      var map;
      var villa = {{lat: 40.666885, lng: -73.973823}};
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: villa,
          zoom: 17
        });
        var marker = new google.maps.Marker(
        {
          position: uluru,
          map: map
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=12323131313&callback=initMap" async defer></script>

  </Layout>
)

export default ContactPage
