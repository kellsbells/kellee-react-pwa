import React, { Component } from 'react';
import '../App.css';
import classNames from 'classnames/bind';

class Header extends Component {

  constructor() {
    super();
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.state = {
      hamburgerHelper: false,
    };
  }

  toggleHamburger() {
    console.log('hi')
    this.setState(prevState => ({
        hamburgerHelper: !prevState.hamburgerHelper
    }));
  }



  render() {

    return (
      	<header className="Header gradient">
      		<div className="Header-container">
      			<div className="Header-home">
              <a href="/#">kellee martins</a>
      			</div>


            <div className={classNames("Header-hamburger", this.state.hamburgerHelper ? "is-active" : "")} onClick={this.toggleHamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
      			
		      </div>
          {this.state.hamburgerHelper && 
            <div className={classNames("Header-navigation", "gradient")}>
              <div className="Header-navigation-container">
                <a onClick={this.toggleHamburger} href="/#about">About</a>
                <a onClick={this.toggleHamburger} href="/#projects">Projects</a>
                <a onClick={this.toggleHamburger} href="/#reviews">Reviews</a>
                <a onClick={this.toggleHamburger} href="/#contact">Contact</a>
              </div>
            </div>
          }
        </header>
    );
  }
}

export default Header;
