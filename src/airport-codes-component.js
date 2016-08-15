import React, { Component } from 'react';

export default class Aircode extends Component {

	constructor(props){
		super(props);
		this.state = {
			airportCode : ''
		};
	}

	getAirportCode(e) {
		// loaded from a file that contains all the airport codes available.
		this.setState({ airportCode: e.target.value });
	}

	render(){
		return {
			<input onChange={ this.getAirportCode.bind(this) } value={ this.state.airportCode } ></input>
		}
	}
}