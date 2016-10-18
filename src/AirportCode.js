import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Input from './Input';

export default class AirportCodeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            codes: [],
            selected: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.getSelected = this.getSelected.bind(this);
    }

    handleChange(codes){
        this.setState({
            codes
        });
    }

    getSelected(e) {
        this.setState({selected: e.target.value});
    }

    render(){
        return (
            <div>
                <Input onChange={ this.handleChange } />
                <select onChange={this.getSelected} value={this.state.selected}>
                    <option>select code</option>
                    { 
                        this.state.codes.length > 0 ?  
                        this.state.codes.map((code, i) => <option 
                            key={i} 
                            value={code.aircode} >
                            { code.city + ' ' + code.aircode }
                            </option>) : 
                        '' 
                    }
                </select>
                <button onClick={() => { this.props.onClick(this.state.selected)} }>display the code</button>
            </div>
        )
    }
}

AirportCodeComponent.PropTypes = {
    onClick: React.PropTypes.func.isRequired
}