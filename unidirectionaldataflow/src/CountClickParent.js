import React, {Component} from 'react';

class CountClickParent extends Component {
    render(){
        return(
            <div>
                <p>{this.props.stateCounter}</p>
            </div>
        )
    }
}

export default CountClickParent