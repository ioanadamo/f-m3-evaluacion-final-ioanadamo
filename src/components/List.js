import React from 'react';
import { Fragment } from 'react';
import Card from './Card';

class List extends React.Component {
	/*  constructor(props) {
    super(props);
    this.state = {  }
  } */
	render() {
		const { people } = this.props;
		return (
			<Fragment>
				{people.map(person => (
					<li key={person.id}>
						<Card person={person} />
					</li>
				))}
			</Fragment>
		);
	}
}

export default List;
