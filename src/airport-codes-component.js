import React, { Component } from 'react';
import reactDOM from 'react-dom';
import aircodes from '../organize-aircode-list.js';

class Aircode extends Component {

	constructor(props){
		super(props);
		this.state = {
			city: '',
			airportCode : []
		};
		this.getAirportCode = this.getAirportCode.bind(this);
	}

	getAirportCode(e) {
		this.setState({ city: e.target.value , airportCode: aircodes.filter(codeObj => {
				return new RegExp(e.target.value.toLowerCase().trim()).test(codeObj.city);
			})
		});
		console.log(this.state.airportCode);
	}

	render(){
		return (
			<input onChange={ this.getAirportCode } value={ this.state.city } ></input>
		)
	}
}

reactDOM.render(<Aircode />, document.getElementById('app'));