import React, { Component } from 'react';
import '../App.css';

class Hero extends Component {
  render() {
    return (
      	<section className="Hero">
      		{/*<img src={heroImage} className="Hero-image" alt="Kellee Martins" />*/}
          
      		<div className="Hero-container">
            <h1 className="gradient-text">kellee martins</h1>
	          <h2>Front-end Engineer</h2>
	        </div>
        </section>
    );
  }
}

export default Hero;
