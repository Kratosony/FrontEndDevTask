import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import Home from 'Components/Pages/Home/Home';
import Login from 'Components/Pages/Login/Login';
import Layout from 'Components/Layout/Layout';
import GameBrowser from 'Components/Pages/Game/GameBrowser';
import { routes } from 'Constants/Routes';
import { history } from "Store/Store";

class App extends Component {
    render() {
        const { loggedIn } = this.props;
        return (
            <ConnectedRouter history={history}>
                <Layout>
                    <Route exact path={routes.home} component={
                        !loggedIn
                            ? Home
                            : () => <Redirect to={routes.gameBrowser} />
                    } />
                    <Route exact path={routes.login} component={!loggedIn
                        ? Login
                        : () => <Redirect to={routes.gameBrowser} />
                    }
                    />
                    <Route
                        exact path={routes.GameBrowser}
                        component={
                            loggedIn
                                ? GameBrowser
                                : () => <Redirect to={routes.home} />
                        }
                    />
                </Layout>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
    };
};

Layout.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
};


export default (connect(mapStateToProps))(App)