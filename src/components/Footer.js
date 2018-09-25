import React, { Component } from 'react';
import '../App.css';
import logo from '../kellee-logo.svg'

class Footer extends Component {
  render() {
    return (
      	<section className="Footer">
      		<div className="Footer-container">
        		<a href="/" className="Footer-link">
      				<p>
      					<img src={logo} className="Header-logo" alt="logo" />| {new Date().getFullYear()}
      				</p>
              	</a>
        	</div>
        </section>
    );
  }
}

export default Footer;
