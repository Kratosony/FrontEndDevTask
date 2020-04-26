import React, { Component } from 'react';
import Home from 'Components/Home';
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "Store/Store";
import './App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;