import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import CardsDetail from './components/CardsDetail';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<HomePage />
				<CardsDetail />
			</div>
		);
	}
}

export default App;
