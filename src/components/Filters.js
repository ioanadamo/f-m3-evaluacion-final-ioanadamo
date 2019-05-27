import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
	render() {
		return (
			<form action="">
				<label htmlFor="serchPople" />
				<input
					id="searchPeople"
					value={this.props.value}
					onChange={this.props.handleChange}
					type="text"
				/>
			</form>
		);
	}
}

Filters.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default Filters;
