import React, {Component} from 'react';

class Output extends Component {
    render(){
        return(
            <div>
                <h1>Output Component</h1>
                <p>{this.props.stateVal}</p>
            </div>
        )
    }
}

export default Output