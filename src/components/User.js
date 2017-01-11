import React, { Component, PropTypes } from 'react'

export default class User extends Component {
    handleSignUp() {
        this.props.signUp({
            name: 'qwedqwd',
            password: 'd222319'
        })
    }
    handleSignOut() {
        this.props.signOut()
    }
    render() {
        const user = this.props.user
        return (
            <div>
                {user.isLoggined ? (
                    <p><button onClick={::this.handleSignOut}>Sign Out</button> / {user.name} </p>
                ) : (
                    <p><button onClick={::this.handleSignUp}>Sign Up</button> / <button>Sign In</button></p>
                )}
            </div>
        )
    }
}

User.PropTypes = {
    isLoggined: PropTypes.boolean,
    name: PropTypes.string
}
