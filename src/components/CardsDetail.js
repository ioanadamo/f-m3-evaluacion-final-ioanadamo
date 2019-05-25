import React from 'react';

class CardsDetail extends React.Component {
	render() {
		const { people, match } = this.props;
		const { peopleId } = match.params;

		const person = people[peopleId];

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
								<p>
									Estado:
									{person.alive ? 'Alive and kicking' : 'Wondering in the sky'}
								</p>
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

export default CardsDetail;
