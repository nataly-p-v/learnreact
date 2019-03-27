import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import SearchResult from '../searchResult/searchResult';
import ErrorBoundary from "../errorBoundary/errorBoundary";

class resultPage extends Component {
    render () {
        return (
            <div className={"main-wrapper"}>
                <Header/>
                <div className={"content"}>
                    <Link to="/" class={"backToResult-btn"}>Search</Link>
                    <ErrorBoundary>error</ErrorBoundary>
                    <div className={"result-description"}>
                        <div className={"result-description__img"}>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/41CAtQyKWLL._SY445_.jpg" alt=""/>
                        </div>
                        <div className={"result-description__text"}>
                            <div className="result-description__title">Pulp Fiction  <div className="result-description__estimate">4.1</div></div>
                            <div className="result-description__sub">Oscar-winning Movies</div>
                            <div className="result-description__year">1994</div>
                            <div className="result-description__duration">124 min</div>
                            <div className={"result-description__descr"}>
                                Weaving together three stories featuring a burglar-loving hit man, his philosophical partner and washed-up boxer, Tarantino lorem ipsum lorem ipsum lorem ipsum
                                Weaving together three stories featuring a burglar-loving hit man, his philosophical partner and washed-up boxer, Tarantino lorem ipsum lorem ipsum lorem ipsum
                            </div>
                        </div>
                    </div>
                    <SearchResult/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default resultPage;
