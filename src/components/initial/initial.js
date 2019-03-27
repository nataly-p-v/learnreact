import React, { Component } from 'react';
import Search from '../search/search';
import Footer from '../footer/footer';
import Header from '../header/header';

class Initial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //this is the example of stateful component
        };
    }
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
