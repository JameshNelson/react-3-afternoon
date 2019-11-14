import React, {Component} from 'react';

export default class Name extends Component{

    constructor(props){
        super(props)
    }
  

    render(){
        let person = this.props.person
        return(
            <div className="name-body">
                <h2>{person.name.first} {person.name.last}</h2>
            </div>
        )
    }
}