import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import {withScriptjs, withGoogleMap, GoogleMap,Marker} from "react-google-maps"
import { compose, withProps } from "recompose"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <div id='map'>
  
    </div>
    <div id="contactBody">
        <div id="contactInfo">
        <a href="https://www.muzosa.com/contact" target="_blank" >
          <h1>Contact us to try a free class!</h1>
        </a>
        <p>LOCATION:Training takes place from 7:00 pm-9:00 pm at Dance Wave studios 182 4th Ave - Degraw Street</p>
        <p>Take the R train to Union street and walk to Degraw along 4th ave</p>
        <img src={require('../images/647.jpg')} alt="Litchfield villa" className="img-responsive" />
      </div>
    </div>


  </Layout>
)

export default ContactPage
