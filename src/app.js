import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Aircode from './airport-codes-component';

class App extends Component {

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
                <Aircode onChange={this.handleChange} />
                <select>
                    { this.state.codes.length > 0 ?  this.state.codes.map((code, i) => <option key={i} >{ code.city + ' ' + code.aircode } </option>) : '' }
                </select>
            </div>
        )
    }
}



reactDOM.render(<App />, document.getElementById('app'));