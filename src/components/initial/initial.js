import React, { Component } from 'react';
import Search from '../search/search';
import Footer from '../footer/footer';
import Header from '../header/header';

class Initial extends Component {
    render () {
        return (
            <div className={"main-wrapper"}>
                <Header/>
                <Search/>
                <Footer/>
            </div>
        )
    }
}
export default Initial;
