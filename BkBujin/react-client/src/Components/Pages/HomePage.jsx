import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return(
    <div id="mainBody">
      <div id="mainBanner">
      <img src={'https://lh3.googleusercontent.com/w3pImt8e0Onm3ukwjrOGTroVKeHokL1YWUHhyXlrgQIk6JV1VxbKg7qOEGnqXD0iDa6HLmE7bZL_liRV294HHe6LWMFLixEVtOHR74sH4edwTM0aTwXix7uotSgUZu04TwjITgl78ZLza2q84T6sh52DLOgcsMy8Mh9UF4mCpHTqXPlsDp-9-GEV5IhdoT_1SNXrsHFkziZjb_QItMY9zbek8sgftdP2KEQmt5XsSwK2itK0Jv7njEYnfi0jH4ahxTSkptMsuA7P8xKOF2Tbr5Yvqao1wz4ZyQgOnIudexw9L8dqtYB1YC7aDH2YexG2lbPyhB4ex4qngSw8SCfxEfSqBRXuNO-KwDRZAFVH6aRkN7IV4-j74bWn9hqQ9i60jHdsCEjyjCb_axL3yw4rOk5ux5d12PeanBLKpYLw0S2l4wugWAxBWZgQvZjBMkGiLVEcwXNrhsESFJ0ghWvuCrR8szgx72eTGnIYUFWeedr44lAN0uP5pPgg6aeOgTllQ1YRkqe3A-oOXcPKAu-zGaToFfFf7Qg3mxbOJ4ePlFrTaSnc6AmUjnayl4d0-DCXQ6F1figAbeAgEKa_iycgVF-UYXECv7_Ha1BLkFGo=w883-h662-no'} alt="jumbotron" className="img-responsive" />
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
      <div id="mapBanner"></div>
    </div>
    )
  }
}

export default HomePage;
