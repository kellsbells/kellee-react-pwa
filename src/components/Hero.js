import React, { Component } from 'react';
import '../App.css';
import heroImage from '../kellee.svg'

class Hero extends Component {
  render() {
    return (
      	<section className="Hero">
      		<img src={heroImage} className="Hero-image" alt="Kellee Martins" />
      		<div className="Hero-container">
	          <h2>Front-End Developer</h2>
	        </div>
        </section>
    );
  }
}

export default Hero;
