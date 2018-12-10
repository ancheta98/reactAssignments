import React, {Component} from 'react';
import "./flats.css"
 
class Flats extends Component {
  render (){
      return(
        <div className="card">
            <a href={this.props.link}>{this.props.name}</a>
            <img src={this.props.img} alt="nice place" />
            <h3>Rating: {this.props.rating}</h3>
        </div>
    )
}
}

export default Flats;
