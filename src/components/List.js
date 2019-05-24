import React from 'react';
import { Fragment } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

class List extends React.Component {
	/*  constructor(props) {
    super(props);
    this.state = {  }
  } */
	render() {
		const { people, value } = this.props;
		return (
			<Fragment>
				{people
					.filter(person =>
						person.name.toUpperCase().includes(value.toUpperCase())
					)
					.map(person => (
						<ul>
							<li key={person.id}>
								<Link to={`/people/${person.id}`}>
									<Card person={person} />
								</Link>
							</li>
						</ul>
					))}
			</Fragment>
		);
	}
}

export default List;
