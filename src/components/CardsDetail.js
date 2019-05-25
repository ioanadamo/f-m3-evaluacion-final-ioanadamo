import React from 'react';

class CardsDetail extends React.Component {
	render() {
		const { people, match } = this.props;
		const { peopleId } = match.params;

		const person = people[peopleId];

		return (
			<div>
				{person !== undefined ? (
					<ul>
						<li>
							<p>{person.name}</p>
							<p>Nacimiento: {person.yearOfBirth}</p>
							<p>Patronus: {person.patronus}</p>
							<p>
								Estado:
								{person.alive ? 'Alive and kicking' : 'Wondering in the sky'}
							</p>
							<img src={person.image} alt={person.name} />
						</li>
					</ul>
				) : (
					<p>Loading details ..</p>
				)}
			</div>
		);
	}
}

export default CardsDetail;
