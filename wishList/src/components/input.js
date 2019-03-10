import React, {Component} from 'react';

class Input extends Component{
    render(){
        return(
            <div>
                <h1>Input Component</h1>
                <input onChange={this.props.typing}/>
                <button onClick={this.props.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default Input