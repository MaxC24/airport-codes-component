import React, { Component } from 'react';

export default class Aircode extends Component {

	constructor(props){
		super(props);
		this.state = {
			airportCode : ''
		};
	}

	getAirportCode() {
		// loaded from a file we gonna look up for all the airport codes available.
	}

	render(){
		return {
			<input onChange={ this.getAirportCode } value={ this.state.airportCode } ></input>
		}
	}
}