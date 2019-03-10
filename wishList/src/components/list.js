import React, {Component} from 'react';

class List extends Component {
    render(){
        const places = this.props.places.map( (place, index) => 
        <p key={index} listitem={index} onClick={this.props.listClick} style={!place.visited ? style : noStyle}>
          {place.name}
        </p>
        )
        const style = {
            "text-decoration": "line-through"
        }
        const noStyle = {
            "text-decoration": "none"
        }

        return(
            <div>
                <h1>Output Component</h1>
                {places}
            </div>
        )
    }
}

export default List