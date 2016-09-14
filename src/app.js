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
                <ul>
                    { this.state.codes.length > 0 ?  this.state.codes.map((code, i) => <li key={i} >{ code.city + ' ' + code.aircode } </li>) : 'here' }
                </ul>
                <Aircode onChange={this.handleChange} />
            </div>
        )
    }
}



reactDOM.render(<App />, document.getElementById('app'));