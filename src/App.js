import "./App.css";

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Router from './components/router';
import { Link } from 'react-router-dom';

/*
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
    ...dispatch
})

/*
 * mapStateToProps
*/
const mapStateToProps = state => ({
    ...state
})

class App extends Component {
    render(){
        return(
            <div className="App">
                <Link to="/movies" className={"nav-link"}>Movies</Link>
                <Link to="/result" className={"nav-link"}>Result</Link>
                <Router/>
            </div>
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
