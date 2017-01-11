import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import User from '../components/User'
import Dictionaries from '../components/Dictionaries'
import AppState from '../components/AppState'

import * as userActions from '../actions/UserActions'


class App extends Component {
    render() {
        const { signUp, signOut } = this.props.userActions
        return (
            <div>
                <h1>QDictionary</h1>
                <p>Самый топовый словарь в мире :)</p>
                <User user={this.props.user} signUp={signUp} signOut={signOut} />
                <Dictionaries dictionaries={this.props.dictionaries} />
                <AppState appState={this.props.appState} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        dictionaries: state.dictionaries,
        appState: state.appState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
