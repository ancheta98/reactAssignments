import React, {Component} from "react"

class Validation extends Component {
    render (){
        const style = {
            "color": "red",
            "fontFamily": "comic sans ms"
        }
        return(
          <div>
            <h1 style={style}>Your message is too long!</h1>
          </div>
      )
  }
  }
  
  export default Validation;