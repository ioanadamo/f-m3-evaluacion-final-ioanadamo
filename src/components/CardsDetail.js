import React from 'react';

class CardsDetail extends React.Component {
	/*  constructor(props) {
    super(props);
    this.state = {  }
  } */
	render() {
		console.log(this.props.match);
		console.log(this.props.people);
		return <p> :)</p>;
	}
}

export default CardsDetail;
