import React, { Component } from 'react';
import '../App.css';
import contact from '../headings/contact.svg'
import instagram from '../social/instagram.svg'
import github from '../social/github.svg'
import twitter from '../social/twitter.svg'
import linkedin from '../social/linkedin.svg'
import email from '../social/email.svg'



class Contact extends Component {

  	render() {
	  return (
	    	<section id="contact" className="Contact gradient">
	    		<div className="Contact-container">
	        	<h3>slide into my DMs</h3>

	        	<div className="Contact-social">
	        		<a href="https://www.instagram.com/kelleebutton/" target="_blank" rel="noopener noreferrer">
	        			<img className="Social-instagram" src={instagram} alt="Instagram" />
	        		</a>
	        		<a href="https://github.com/kellsbells" target="_blank" rel="noopener noreferrer">
	        			<img className="Social-github" src={github} alt="Github" />
	        		</a>
	        		<a href="https://twitter.com/kelleebutton" target="_blank" rel="noopener noreferrer">
	        			<img className="Social-twitter" src={twitter} alt="Twitter" />
	        		</a>
	        		<a href="https://www.linkedin.com/in/kelleemartins" target="_blank" rel="noopener noreferrer">
	        			<img className="Social-linkedin" src={linkedin} alt="LinkedIn" />
	        		</a>

	        		<a href="https://www.linkedin.com/in/kelleemartins" target="_blank" rel="noopener noreferrer">
	        			<img className="Social-linkedin" src={email} alt="LinkedIn" />
	        		</a>
	        	</div>
			</div>
	      </section>
	  );
	}
}

export default Contact;