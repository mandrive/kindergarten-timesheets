import React, { Component } from 'react';

export default class GridRow extends Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}