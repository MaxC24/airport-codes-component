import React, { Component } from 'react';
import reactDOM from 'react-dom';
import AirportCode from './src/AirportCode';

class App extends Component {

	constructor(props) {
		super(props);
		this.getCode = this.getCode.bind(this);
	}

	getCode(code) {
		console.log(code);
	}

	render() {
		return (
			<AirportCode onClick={ this.getCode.bind(this) } />
		)
	}
}

reactDOM.render(
	<App />, 
	document.getElementById('app')
);

