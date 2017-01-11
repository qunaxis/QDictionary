import React, { Component, PropTypes } from 'react'

export default class Dictionaries extends Component {
    render() {
        const dictionaries = this.props.dictionaries
        return (
            <div>
                {dictionaries.isLoading ? (
                    <p>'Словари загружаются...'</p>
                ) : (
                    <p>'Список словарей'</p>
                )}
            </div>
        )
    }
}

Dictionaries.PropTypes = {
    isLoading: PropTypes.boolean,
    themes: PropTypes.array
}
