import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBy extends Component {
    render () {
        return (
            <div className={"searchBy"}>
                <span className={"search-title search-title--small"}>
                   search by
                </span>
                <Link to="/" className="searchBy__btn searchBy__btn--pink"> Title</Link>
                <Link to="/" className="searchBy__btn searchBy__btn--grey"> Genre</Link>

            </div>
        )
    }
}
export default SearchBy;
