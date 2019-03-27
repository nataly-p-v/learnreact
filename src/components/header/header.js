import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {//this is the example of stateless component
        return (
                <header className="header">
                    <Link to="/" className="header-logo"> <span>netflixroulette</span></Link>
                </header>
        )
    }
}
export default Header;



