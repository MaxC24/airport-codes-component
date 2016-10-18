import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Input from './Input';

export default class AirportCodeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            codes: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(codes){
        this.setState({
            codes
        });
    }

    render(){
        return (
            <div>
                <Input onChange={ this.handleChange } />
                <select>
                    { 
                        this.state.codes.length > 0 ?  
                        this.state.codes.map((code, i) => <option key={i} value={i}} >{ code.city + ' ' + code.aircode } </option>) : 
                        '' 
                    }
                </select>
            </div>
        )
    }
}

AirportCodeComponent.PropTypes = {
    onClick: React.PropTypes.func.isRequired
}