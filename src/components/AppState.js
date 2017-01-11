import React, { Component, PropTypes } from 'react'

export default class AppState extends Component {
    render() {
        const appState = this.props.appState
        return (
            <div>
                {appState.status ? (
                    <p>'All is ok'</p>
                ) : (
                    <div>
                        <p>'Bad status'</p>
                        <p>{appState.message}</p>
                    </div>
                )}
            </div>
        )
    }
}

AppState.PropTypes = {
    status: PropTypes.boolean,
    message: PropTypes.string
}
