import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Brooklyn extends React.Component {
  render() {
    return(
      <div className='type'>Lorem ipsum dolor sit amet, ligula sapien curabitur sagittis, vel lectus tincidunt vel purus sit scelerisque, vulputate purus tellus, tristique varius, hymenaeos non ultricies facilisis scelerisque. Fusce lorem cras auctor pellentesque leo, luctus tortor ipsum ut sem, a sed felis orci lacinia, id at pellentesque, in ut dui. Nulla vitae vehicula in at vestibulum, nulla sed tortor hendrerit vel nam, nibh eros aliquam urna justo vel, et nunc vel duis est, sit wisi. Elit sem orci a pretium dignissim sed. Dui sapien metus sit, sodales pulvinar eu ac volutpat, lorem diam lobortis sed eget ornare curae.</div>
    );
  }
}

class Bujin extends React.Component {
  render() {
    return(
      <div className='type'>Lorem ipsum dolor sit amet, ligula sapien curabitur sagittis, vel lectus tincidunt vel purus sit scelerisque, vulputate purus tellus, tristique varius, hymenaeos non ultricies facilisis scelerisque. Fusce lorem cras auctor pellentesque leo, luctus tortor ipsum ut sem, a sed felis orci lacinia, id at pellentesque, in ut dui. Nulla vitae vehicula in at vestibulum, nulla sed tortor hendrerit vel nam, nibh eros aliquam urna justo vel, et nunc vel duis est, sit wisi. Elit sem orci a pretium dignissim sed. Dui sapien metus sit, sodales pulvinar eu ac volutpat, lorem diam lobortis sed eget ornare curae.</div>
    );
  }
}

class About extends Component {
  constructor() {
   super();
   this.state = {
     childVisible: false
   }

   this.state = {
     childVisibleB: false
   }
 }
  render() {
    return(
    <div id="mainBody">
      <div id="mainBanner">
      <img src={require('./img/Photos/aboutTop.jpg')} alt="jumbotron" className="img-responsive" />
      <div className='typeContainer2'>
        <h1>What is BK Muzosa Bujinkan?</h1>
           <div onClick={() => this.onClick(this,mo)}>
             <div className="homeButton" id='mo'><h2>Click here to learn more about Muzosa and the Bujinkan</h2></div>
           </div>

           {
          this.state.childVisible
            ? <Brooklyn />
            : null
        }

      </div>
      </div>
      <div id="bujinBanner">
        // <img src={require('./img/Photos/masaaki-hatsumi.jpg')} className="img-responsive" />
        <div className='typeContainer2'>
          <h1>History of the Bujinkan?</h1>
            { /* <div onClick={() => this.onClick(this, lm)}>
              <div className="homeButton" id='lm'><h2>Learn More</h2></div>
            </div> */}

            {
           this.state.childVisible
             ? <Bujin />
             : null
         }
        </div>
      </div>
     </div>
    )
  }
  onClick() {
    this.setState(prevState => ({ childVisible: !prevState.childVisible }));
  }
};

export default About;
