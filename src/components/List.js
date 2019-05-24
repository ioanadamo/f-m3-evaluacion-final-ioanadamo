import React from 'react';
import { Fragment } from 'react';
import Card from './Card';

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
						<li key={person.id}>
							<Card person={person} />
						</li>
					))}
			</Fragment>
		);
	}
}

export default List;
