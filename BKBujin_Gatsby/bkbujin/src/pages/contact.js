import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div id="contactBody">
        <div id="contactInfo">
        <a href="https://www.muzosa.com/contact" target="_blank" >
          <h1>Contact us to try a free class!</h1>
        </a>
        <p>LOCATION:Training takes place from 7:00 pm-9:00 pm on the porch and surrounding grounds of Litchfield Villa in Prospect Park</p>
        <p>Take the F train to 9th ave and walk to 5th street</p>
        <img src={require('../images/647.jpg')} alt="Litchfield villa" className="img-responsive" />
      </div>
    </div>


  </Layout>
)

export default ContactPage
