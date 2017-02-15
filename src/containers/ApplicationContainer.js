import React, { Component } from 'react';
import ApplicationBar from './../components/applicationBar';


export default class ApplicationContainer extends Component {
    render() {
        return (
            <div className="container">
                <ApplicationBar />
                {this.props.children}
            </div>
        )
    }
}