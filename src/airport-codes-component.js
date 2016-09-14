import React, { Component } from 'react';
import aircodes from '../organize-aircode-list.js';

export default class Aircode extends Component {

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
		if(this.props.onChange) {
			this.props.onChange(this.state.airportCode);
		}
	}

	render(){
		return (
			<input onChange={ this.getAirportCode } value={ this.state.city } ></input>
		)
	}
}
