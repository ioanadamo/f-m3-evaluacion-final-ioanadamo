import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import CardsDetail from './components/CardsDetail';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: []
		};
	}
	componentDidMount() {
		this.fetchCharacters();
	}
	fetchCharacters() {
		fetch('http://hp-api.herokuapp.com/api/characters')
			.then(response => response.json())
			.then(data => {
				this.setState({
					people: data.map((item, key) => {
						return {
							...item,
							id: key + 1
						};
					})
				});
			});
	}

	render() {
		return (
			<div className="App">
				<HomePage people={this.state.people} />
				<CardsDetail />
			</div>
		);
	}
}

export default App;
