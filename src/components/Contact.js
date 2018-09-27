import React, { Component } from 'react';
import '../App.css';
import instagram from '../social/instagram.svg'
import github from '../social/github.svg'
import twitter from '../social/twitter.svg'
import linkedin from '../social/linkedin.svg'
import email from '../social/email.svg'

const Contact = () => (
  	<section id="contact" className="Contact">
  		<div className="Contact-container">
      	<h3 className="gradient-text">slide into my DMs</h3>

      	<div className="Contact-social">
      		<a href="https://github.com/kellsbells" target="_blank" rel="noopener noreferrer">
      			<img className="Social-github" src={github} alt="Github" />
      		</a>
      		<a href="https://www.instagram.com/kelleebutton/" target="_blank" rel="noopener noreferrer">
      			<img className="Social-instagram" src={instagram} alt="Instagram" />
      		</a>
      		
      		<a href="https://twitter.com/kelleebutton" target="_blank" rel="noopener noreferrer">
      			<img className="Social-twitter" src={twitter} alt="Twitter" />
      		</a>
      		<a href="https://www.linkedin.com/in/kelleemartins" target="_blank" rel="noopener noreferrer">
      			<img className="Social-linkedin" src={linkedin} alt="LinkedIn" />
      		</a>
      		<a href="mailto:kelleemartins@gmail.com" rel="noopener noreferrer">
      			<img className="Social-email" src={email} alt="Email" />
      		</a>
      	</div>
	</div>
    </section>
);


export default Contact;