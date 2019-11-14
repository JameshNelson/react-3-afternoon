import React, {Component} from 'react'; 

export default class Movies extends Component{

    constructor(props){
        super(props)
    }

    render(){
        let person = this.props.person
        return(
            <div className="movie-body">
                <h3>Favorite Movies: </h3>
                <ol>
                <li>1. {person.favoriteMovies[0]}</li>
                <li>2. {person.favoriteMovies[1]}</li>
                <li>3. {person.favoriteMovies[2]}</li>
                </ol>
            </div>
        )
    }
}