import React from 'react';
import { Fragment } from 'react';
import List from './List';
import Filters from './Filters';
import PropTypes from 'prop-types';

class Homepage extends React.Component {
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
Homepage.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired,
	people: PropTypes.array.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default Homepage;
