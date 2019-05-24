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
				<header>
					<h1>Harry Potter Characters</h1>
				</header>
				<main>
					{this.props.isFetching ? (
						<p>Is loading...</p>
					) : (
						<Fragment>
							<Filters
								value={this.props.value}
								handleChange={this.props.handleChange}
							/>
							<List value={this.props.value} people={this.props.people} />
						</Fragment>
					)}
				</main>
			</Fragment>
		);
	}
}

export default Hompage;
