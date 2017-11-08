import React, { Component } from 'react';
import '../App.css';
import about from '../headings/about.svg'
import react from '../icons/react.png'
import angularjs from '../icons/angularjs.png'
import css3 from '../icons/css3.png'
import git from '../icons/git.png'
import html5 from '../icons/html5.png'
import javascript from '../icons/javascript.png'
import jquery from '../icons/jquery.png'
import photoshop from '../icons/photoshop.png'
import php from '../icons/php.png'
import sass from '../icons/sass.png'
import shopify from '../icons/shopify.png'
import wordpress from '../icons/wordpress.png'

class About extends Component {
  render() {
    return (
      	<section id="about" className="About gradient">
      		<div className="About-container">
  	        	<img className="About-heading" src={about} alt="About Kellee Martins" />
            <div className="About-text">
  	        	<h3>My personal statement:</h3>
  	        	<p>“My vision is to be an honest, hard working and positive leader and to be recognized internationally within the development community. I am committed to growing as a developer as I continue voraciously and intentionally learning. My mission is to create a beautiful experience for my users.”</p>
        	  </div>
            <div className="About-tech">
              <h3>A few of my favorite tools:</h3>
              <div className="About-icons">
                <img className="About-icon" src={react} alt="React" />
                <img className="About-icon" src={javascript} alt="Javascript" />
                <img className="About-icon" src={angularjs} alt="AngularJS" />
                <img className="About-icon" src={html5} alt="HTML5" />
                <img className="About-icon" src={css3} alt="CSS3" />
                <img className="About-icon" src={php} alt="PHP" />
                <img className="About-icon" src={git} alt="Git" />
                <img className="About-icon" src={sass} alt="SASS" />
                <img className="About-icon" src={jquery} alt="JQuery" />
                <img className="About-icon" src={photoshop} alt="Photoshop" />
                <img className="About-icon" src={wordpress} alt="Wordpress" />
                <img className="About-icon" src={shopify} alt="Shopify" />
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default About;
