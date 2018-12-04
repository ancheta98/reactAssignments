import React, {Component} from 'react';

class CountClickChild extends Component{
    render(){
        return(
            <button onClick={this.props.increment}>Increment the count</button>
        )
    }
}

export default CountClickChild