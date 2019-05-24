import React from 'react';
import { fragment } from 'react';
import Card from './Card';

class List extends React.Component {
	/*  constructor(props) {
    super(props);
    this.state = {  }
  } */
	render() {
		return (
			<fragment>
				<p>List</p>
				<Card />
			</fragment>
		);
	}
}

export default List;
