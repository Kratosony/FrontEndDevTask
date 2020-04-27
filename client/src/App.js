import React, { Component } from 'react';
import Home from 'Components/Home';
import Login from 'Components/Login';
import Layout from 'Components/Layout';
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "Store/Store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;