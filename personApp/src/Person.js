import React from "react"

function Person(props){
    return <div>{props.name} {props.age} {props.weight}lbs {props.height} <hr/></div>
}

export default Person;