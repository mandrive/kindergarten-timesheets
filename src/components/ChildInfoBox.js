import React, { Component } from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/childInfoBox.cssmodule.scss';

class ChildInfoBox extends Component {
    render() {
        return (
            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2" styleName="center-text-sm">
                <i className="material-icons">face</i> {this.props.child.firstName + ' '+ this.props.child.lastName}
            </div>
        );
    }
}

export default cssmodules(styles)(ChildInfoBox);