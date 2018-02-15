import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class HomePage extends Component {
  render() {
    return(
    <div id="mainBody">
      <div id="mainBanner">
      <img src={'https://lh3.googleusercontent.com/cfUGz8_iwIdP01HUxHRkDZDeryH-YYz1h6ZVJ9SRbzHS6-ZkKCywf8g166vC8yYANv7fIQNDT86UYnz36xYMceIoa_PZI7hb0ncQxw4dY_Bvs7lNduBl2NHSlQPT50xjjqALyhBdAm6SukN8Up3_UXSeffbIXI_Y_MSAXfyBT1bfr0gTs2yvrkb_4P3nm1T46Fv9sPRFIZuD32yqcWdCWblkbmYxP86hsQ6g8bLPsBp-pIEWVSuVmP0ttNTITYRfoSqVwvmPHsz09CmP-YShhQlVLy1ZALM9qFzSl7HAWVQ2GGpuaVd7Y8AsWYJDkmVpRuOBbz6aN3-5-39i1OuY0IvfXc0DlLxS_27KPxkkd8xB4_W66AWMT5iHCrOZUM3ge8MbAIwRsg0Og66U4wvyC0vuuFqsIHhy2sUts6yAPIuj5QjJKGC6DNXhuvE_3Sjusg529yYDihQgGMMiOD6VkRxvNo1vxP7VaDWIJkZwbW2JiXk45cPMPgWL21c7LE0Ncchxa3hP_r1yKFxK96G3n4yugNdaGdk1YW9Acu0SUgl88HxafYTfLiQshTnIkFrM-XLBA7J4Y0ZHFwFd0RunaX6Z2ADv_lfwrAICJt6u=w852-h639-no'} alt="jumbotron" className="img-responsive" />
      <div className='typeContainer'>
        <h1>What is BK Muzosa bujinkan?</h1>
        <Link to="/About" className="homePage">Learn More</Link>
      </div>
      </div>
      <div id="bujinBanner">
        <img src={'http://www.shingan.ro/wp-content/uploads/2013/04/Masaaki_Hatsumi.jpg'} className="img-responsive" />
        <div className='typeContainer2'>
          <h1>History of the Bujinkan?</h1>
          <Link to="/About" className="homePage">Learn More</Link>
        </div>
      </div>
      <div id="mapBanner">
      
      </div>
    </div>
    )
  }
}

export default HomePage;
