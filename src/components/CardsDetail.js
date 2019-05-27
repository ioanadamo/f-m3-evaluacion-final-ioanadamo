import React from 'react';
import IconDeath from '../images/download.png';
import PropTypes from 'prop-types';

class CardsDetail extends React.Component {
	render() {
		const { people, match } = this.props;
		const { peopleId } = match.params;

		const person = people[peopleId];
		console.log(peopleId);

		return (
			<div className="detailCard__wraper">
				{person !== undefined ? (
					<ul className="detailCard__list-container">
						<img
							className="detailCard__image"
							src={person.image}
							alt={person.name}
						/>

						<div>
							<li>
								<h1>{person.name}</h1>
							</li>
							<li>
								<p>
									Nacimiento:{' '}
									{!person.yearOfBirth
										? 'Eran tiempos dificiles, nadie lo recuerda'
										: person.yearOfBirth}
								</p>
							</li>
							<li>
								<p>
									Patronus: {!person.patronus ? 'No se sabe' : person.patronus}
								</p>
							</li>
							<li>
								Estado:
								{person.alive ? (
									<p> Alive and kicking</p>
								) : (
									<img
										className="detailCard__death-icon"
										src={IconDeath}
										alt="death-icon"
									/>
								)}
							</li>
						</div>
					</ul>
				) : (
					<p>Loading details ..</p>
				)}
			</div>
		);
	}
}

CardsDetail.propTypes = {
	people: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired
};

export default CardsDetail;
