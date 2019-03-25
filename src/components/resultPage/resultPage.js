import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { Link } from 'react-router-dom';

class resultPage extends Component {
    render () {
        return (
            <div className={"main-wrapper"}>
                <Header/>
                <div className={"content"}>
                    <Link to="/" class={"backToResult-btn"}>Search</Link>
                    <div className={"result-description"}><div className="img-wrapper"><img src="https://images-na.ssl-images-amazon.com/images/I/41CAtQyKWLL._SY445_.jpg" alt=""/></div></div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default resultPage;
