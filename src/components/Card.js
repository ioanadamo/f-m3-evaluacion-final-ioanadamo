import React from 'react';

class Card extends React.Component {
	/*  constructor(props) {
    super(props);
    this.state = {  }
  } */
	render() {
		const { people } = this.props;
		return (
			<div>
				{people.map(item => {
					return (
						<div>
							<img src={item.image} alt={item} />
							<p>{item.name}</p>
							<p>{item.house}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Card;
