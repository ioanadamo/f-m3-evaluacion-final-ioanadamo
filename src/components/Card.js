import React from 'react';

class Card extends React.Component {
	/*  constructor(props) {
    super(props);
    this.state = {  }
  } */
	render() {
		const { person } = this.props;
		return (
			<div>
				<img src={person.image} alt={person.name} />
				<p>{person.name}</p>
				<p>{person.house}</p>
			</div>
		);
	}
}

export default Card;
