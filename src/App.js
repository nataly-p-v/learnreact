import React, {Component} from "react";
import "./App.css";
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <div className="App">
                <nav className={"main-nav"}>
                    <Link to="/helloworld1" className={"main-nav__link"}>jsx</Link>
                    <Link to="/helloworld2" className={"main-nav__link"}>createElement</Link>
                    <Link to="/helloworld3" className={"main-nav__link"}>PureComponent</Link>
                    <Link to="/helloworld4" className={"main-nav__link"}>functional component</Link>
                </nav>
                <Main/>
            </div>
        );
    }
}


export default App;
