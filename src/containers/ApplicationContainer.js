import React, { Component } from 'react';
import App from './../components/App';

export default class ApplicationContainer extends Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}