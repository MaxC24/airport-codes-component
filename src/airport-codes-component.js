import React, { Component } from 'react';
import reactDOM from 'react-dom';
import aircodes from '../organize-aircode-list.js';

export default class Aircode extends Component {

	constructor(props){
		super(props);
		this.state = {
			city: '',
			airportCode : ''
		};
		this.getAirportCode = this.getAirportCode.bind(this);
	}

	getAirportCode(e) {
		// loads from a file that contains all the airport codes available.
		let airportCode;
		for(let i = 0; i< aircodes.length; i++){
			if(new RegExp(e.target.value.toLowerCase()).test(aircodes[i].city)) {
				airportCode = aircodes[i].aircode;
			}
		}
		this.setState({ city: e.target.value, aiportCode });
	}

	render(){
		return {
			<input onChange={ this.getAirportCode } value={ this.state.city } ></input>
		}
	}
}

reactDOM.render(Aircode, document.getElementById('app'));