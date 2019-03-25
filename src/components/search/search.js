import React, {Component} from 'react';
import SearchBy from '../searchBy/searchBy';
import SearchResult from '../searchResult/searchResult';
import {Link} from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
    }

    render() {
        return (
            <div className={"content"}>
                <div className={"cta-wrapper"}>
                    <form className={"search-form"}>
                        <label>
                            <span className={"search-title"}>
                                Find you movie
                            </span>
                            <div className="search-field">
                                <input type="text" value={this.state.value} onChange={this.handleChange} className={"search-input"}/><span className="search-symbol">&#11148;</span>
                            </div>
                        </label>
                        <Link to="/result" className={"search-btn"} onClick={this.handleSubmit}> <span>search</span></Link>
                    </form>
                    <SearchBy/>
                </div>
                <SearchResult/>
            </div>
        )
    }
}

export default Search;
