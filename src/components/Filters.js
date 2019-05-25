import React from 'react';

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

export default Filters;
