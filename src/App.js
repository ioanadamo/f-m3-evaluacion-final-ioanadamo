import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import CardsDetail from './components/CardsDetail';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: {
				data: [],
				isFetching: true
			},
			filters: {
				value: ''
			}
		};

		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		this.fetchCharacters();
	}
	fetchCharacters() {
		fetch('http://hp-api.herokuapp.com/api/characters')
			.then(response => response.json())
			.then(data => {
				this.setState({
					people: {
						isFetching: false,
						data: data.map((item, key) => {
							return {
								...item,
								id: key + 1
							};
						})
					}
				});
			});
	}

	handleChange(e) {
		const inpValue = e.currentTarget.value;

		this.setState({
			filters: {
				value: inpValue
			}
		});
	}

	render() {
		return (
			<div className="App">
				<HomePage
					people={this.state.people.data}
					isFetching={this.state.people.isFetching}
					value={this.state.filters.value}
					handleChange={this.handleChange}
				/>
				<CardsDetail />
			</div>
		);
	}
}

export default App;
