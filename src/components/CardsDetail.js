import React from 'react';

class CardsDetail extends React.Component {
	/*  constructor(props) {
    super(props);
    this.state = {  }
  } */
	render() {
		const { people, match } = this.props;
		const { peopleId } = match.params;

		const person = people[peopleId];
		console.log(person);
		return (
			<div>
				{person !== undefined ? (
					<ul>
						<li>
							<p>{person.name}</p>
							<p> {person.yearOfBirth}</p>
							<p> {person.patronus}</p>
							<p>
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
