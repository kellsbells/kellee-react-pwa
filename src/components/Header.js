import React, { Component } from 'react';
import '../App.css';
import logo from '../kellee-logo.svg'

class Header extends Component {
  render() {
    return (
      	<header className="Header">
      		<div className="Header-container">
      			<div className="Header-home">
              <a href="/">
      					<img src={logo} className="Header-logo" alt="logo" />
              </a>
      			</div>
      			<div className="Header-navigation">
              <a href="/#about">About</a>
              <a href="/#projects">Projects</a>
              <a href="/#contact">Contact</a>
            </div>
		    </div>
        </header>
    );
  }
}

export default Header;
