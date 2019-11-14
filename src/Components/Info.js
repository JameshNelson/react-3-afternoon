import React, {Component} from 'react'; 

export default class Info extends Component{
  constructor(props){
      super(props)
  }

    render(){
        let person = this.props.person
        return(
            <div className="info-body">

                <h3>From: {person.city}, {person.country}</h3>
                <h3>Job Title: {person.title}</h3>
                <h3>Employer: {person.employer}</h3>

            </div>

        )
    }
}