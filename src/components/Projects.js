import React, { Component } from 'react';
import '../App.css';
import myProjects from '../myProjects';
import Project from './Project';

class Projects extends Component {

	constructor() {
		super();
		this.state = {
			projects: {},
		};
	}

	componentWillMount() {
	    this.setState({
			projects: myProjects
		});
	}

	render() {
	  	return (
	    	<section id="projects" className="Projects">
	    		<div className="Projects-container">
		        	<h3 className="gradient-text">all the things</h3>
		            <ul className="Projects-list">
						{
							Object
							.keys(this.state.projects)
							.map(key => <Project key={key} index={key} details={this.state.projects[key]} />)
						}
					</ul>
	        	</div>
	      	</section>
	  	);
	}
}

export default Projects;
    