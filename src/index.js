import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App.js";
import { BrowserRouter } from 'react-router-dom';

// Required for Redux store setup
import { Provider } from 'react-redux'
import configureStore from './store';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
