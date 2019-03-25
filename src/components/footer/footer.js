import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
            <footer className={"footer"}>
                <Link to="/" className="footer-logo"> <span>netflixroulette</span></Link>
            </footer>
        )
    }
}
export default Footer;
