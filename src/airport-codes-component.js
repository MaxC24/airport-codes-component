import React, { Component } from 'react';

export default class Aircode extends Component {

	constructor(props){
		super(props);
		this.state = {
			airportCode : ''
		};
	}

	getAirportCode() {
		// loaded from a file that contains all the airport codes available.
	}

	render(){
		return {
			<input onChange={ this.getAirportCode.bind(this) } value={ this.state.airportCode } ></input>
		}
	}
}