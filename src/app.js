import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Aircode from './airport-codes-component';

class App extends Component {

    handleChange(codes){
        console.log(codes);
    }

    render(){
        return (
            <div>
                <Aircode onChange={this.handleChange} />
            </div>
        )
    }
}



reactDOM.render(<App />, document.getElementById('app'));