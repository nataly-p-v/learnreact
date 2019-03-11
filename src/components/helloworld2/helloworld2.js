import React, { Component } from 'react';

class Helloworld2 extends Component {
    render () {
        return (
            React.createElement(
                'h1',
                {className: 'greeting'},
                'Hello, world!2'
            )
        )
    }
}
export default Helloworld2;
