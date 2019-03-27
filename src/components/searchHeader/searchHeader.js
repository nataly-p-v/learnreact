import React, {Component} from 'react';

class searchHeader extends Component {
    render() {
        return (
                <header className={"search-result__header"}>
                    <div className="search-result__header-title">12 movies found</div>
                    <div className="search-result__header-title">Sort by release <span className="">date</span> <span
                        className="search-result__header-title-active">rating</span></div>
                </header>
        )
    }
}

export default searchHeader;
