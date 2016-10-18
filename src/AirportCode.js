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
    }

    handleChange(codes){
        this.setState({
            codes
        });
    }

    getSelected(code) {
        console.log(code);
        this.setState({selected: code});
    }

    render(){
        return (
            <div>
                <Input onChange={ this.handleChange } />
                <select onChange={(e) => { 
                    this.getSelected(e.target.value)
                }}>
                    <option>select code</option>
                    { 
                        this.state.codes.length > 0 ?  
                        this.state.codes.map((code, i) => <option 
                            key={i} 
                            value={code.aircode} >{ code.city + ' ' + code.aircode } 
                            </option>) : 
                        '' 
                    }
                </select>
                <div>{ this.state.selected }</div>
                <button onClick={()=>{ this.getSelected(this.state.selected) }}>display the code</button>
            </div>
        )
    }
}

AirportCodeComponent.PropTypes = {
    onClick: React.PropTypes.func.isRequired
}