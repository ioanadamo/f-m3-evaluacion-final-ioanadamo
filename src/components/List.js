import React from 'react';
import { Fragment } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

class List extends React.Component {
	render() {
		const { people, value } = this.props;
		return (
			<Fragment>
				<ul className="characteres__list">
					{people
						.filter(person =>
							person.name.toUpperCase().includes(value.toUpperCase())
						)
						.map(person => (
							<li key={person.id}>
								<Link className="card__link" to={`/people/${person.id}`}>
									<Card person={person} />
								</Link>
							</li>
						))}
				</ul>
			</Fragment>
		);
	}
}

export default List;
