import React from 'react';

class Project extends React.Component {
	render() {
		const details = this.props.details;
		
		return (
			<li className="Project">
				<img className="Project-image" src={'projects/' + details.image} alt={details.name}/>
				<div className="Project-overlay gradient-opacity">
					<p>{details.name}</p>
				</div>
			</li>
		)
	}
}

export default Project;

