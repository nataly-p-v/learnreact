import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Movie extends Component {
    render() {
        return (
            <div className={"search-result__grid-item"} key={this.props.id}>
                <Link to={`/movies/${this.props.id}`}>
                    <div className="img-wrapper">
                        <img src={this.props.poster_path} alt=""/>
                    </div>
                    <div className={"item-wrapper"}>
                        <div className="text">
                            <div className={"item-title"}>{this.props.title}</div>
                            <span>{this.props.genres}</span>
                        </div>
                        <div className={"year"}>{this.props.release_date.split('-')[0]}</div>
                    </div>
                </Link>
            </div>
        );


    }
}

export default Movie;
