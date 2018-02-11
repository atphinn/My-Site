import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return(
    <div id="mainBody">
      <div id="mainBanner">
      <img src={'https://lh3.googleusercontent.com/lZf_Ji3FrgP20HC5shnpRqMNeBK6X4NB-jHoeeA_eiKV5b8gWrTawmdbxZzVCyBCOPsrdtklKIxTft3qZ_lSGPe3sm847AvR9JxpfeLMrXb9GAg9OdezD238ZEcxQJZlsTWuuBLtGMwAYHKjMK_zFJxx5wCCBVsI7pvclXFGWEQO7an3IO2W64oeAMVJkw61ev-l5obyE-FSE9zq-bvpwUyxVZF7xxUl66iQTQYGsNK8fGRQIzCQpVM1B35KBcRR9b8gZed00nvnHAMKbxJhPh3RGfVITJ0Vk9a0EONnHpgvxKORMqGRdD2hhCTWsPlyh2X1jWMt3ctkkKhzlWwhhQ04NE3C1C8CTiPOJ85hx1TTAqPOn-LTd7QFY5EJTKfIdJxKtXSGqCl-T11suHKduX55-e83HLRkCvX6YC4l_3q8BqaQ-0W7jEguXyaVIVyZj593dvqGF7cHXtmxR2k8tdi4B4-oRcrDWaUI0nhcIAodnFaPvqcDl2Y0A-AMD_mUFS5UTBy2B_ePbWxks9dDwZvnAlMpKFvt_dL8Avxy-YXbbkHeQKNvSamFIYoDhRJsIJULNGc5UvuoGL2Ej_DoqWhaHo1yb2kauDHQJS9L=w852-h639-no'} alt="jumbotron" className="img-responsive" />
      <div className='typeContainer'>
        <h1>Who we are?</h1>
        <button>Learn More</button>
      </div>
      </div>
      <div id="bujinBanner"><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztftfBdhLYHAxtmQFWmF63sT-FwseiZ7WUq5IYxqjOlZlCOQ6HQ'} className="img-responsive" /> </div>
      <div id="mapBanner"></div>
    </div>
    )
  }
}

export default HomePage;
