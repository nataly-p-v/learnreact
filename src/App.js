import React, { Component, PureComponent} from "react";
import "./App.css";

// class App extends Component{
class App extends PureComponent {
    render(){
        const element1 = (
            <h1 className="greeting">
                Hello, world!1
            </h1>
        );

        const element2 = React.createElement(
            'h1',
            {className: 'greeting'},
            'Hello, world!2'
        );

        return(
            <div className="App">
                {element1}
                {element2}
        </div>
    );
    }
}


export default App;
