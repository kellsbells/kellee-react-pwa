import React from 'react';

class Project extends React.Component {
	render() {
		const details = this.props.details;
		//const index = this.props.index;
		//const isAvailable = details.status === 'available';
		//const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';
		
		return (
			<li className="Project">
				<img className="Project-image" src={'projects/' + details.image} alt={details.name}/>
				<div className="Project-overlay">
					<p>{details.name}</p>
				</div>
			</li>
		)
	}
}

export default Project;

