import React from 'react';
import { Fragment } from 'react';
import List from './List';
import Filters from './Filters';

class Hompage extends React.Component {
	/* constructor(props) {
    super(props);
    this.state = {  }
  } */
	render() {
		return (
			<Fragment>
				<List people={this.props.people} />
				<Filters />
			</Fragment>
		);
	}
}

export default Hompage;
