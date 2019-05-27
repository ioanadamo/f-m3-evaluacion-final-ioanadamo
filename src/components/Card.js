import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
	render() {
		const { person } = this.props;
		return (
			<div className="list__card">
				<img className="card__img" src={person.image} alt={person.name} />
				<h1 className="card__name">{person.name}</h1>
				<p className="card__house">
					{!person.house ? 'Va por cuenta propria' : person.house}
				</p>
			</div>
		);
	}
}

Card.propTypes = {
	person: PropTypes.object.isRequired
};

export default Card;
