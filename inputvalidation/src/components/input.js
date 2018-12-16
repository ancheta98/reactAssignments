import React, {Component} from 'react';
import '../assets/input.css'
 
class Input extends Component {
  render (){
      return(
        <div>
            <input onChange={this.props.typing}/>
        </div>
    )
}
}

export default Input;
