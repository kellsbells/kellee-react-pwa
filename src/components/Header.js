import React, { Component } from 'react';
import '../App.css';
import logo from '../kellee-logo.svg'

class Header extends Component {
  render() {
    return (
      	<header className="Header gradient">
      		<div className="Header-container">
      			<div className="Header-home">
              <a href="/#">kellee martins</a>
      			</div>
      			<div className="Header-navigation">
              <a href="/#about">About</a>
              <a href="/#projects">Projects</a>
              <a href="/#reviews">Reviews</a>
              <a href="/#contact">Contact</a>
            </div>
		    </div>
        </header>
    );
  }
}

export default Header;
