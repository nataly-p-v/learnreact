import React, {Component} from 'react';

class Movie extends Component {
    constructor() {
        super();
        this.editMovie = this.editMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
    };

    editMovie = ({ target: { value } }) => {
        console.log(value)
    };

    deleteMovie = ({ target: { value } }) => {
        console.log(value)
    };

    render() {

        return (
            <li  className={"movie"}>
                <span className={"movie-title"}>Movie title: {this.props.title}</span>
                <br/>
                <span className={"movie-creation"}>release date:{this.props.release_date}</span>
                <br/>
                <span className={"movie-budget"}>budget: {this.props.budget}</span>
                <span className="button-wrapper">
                    <button className={"btn btn-primary"} onClick={this.editMovie}>Edit</button>
                    <button className={"btn btn-primary"} onClick={this.deleteMovie}>Delete</button>
                </span>
            </li>
        );


    }
}

export default Movie;
