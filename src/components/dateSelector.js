import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import cssmodules from 'react-css-modules';
import styles from './styles/dateSelector.cssmodule.scss';
import moment from 'moment'

class DateSelector extends Component {
    render() {
        return(
            <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12" styleName="center-text">
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <IconButton onClick={this.props.goPrevMonth}>
                        <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>
                    </IconButton>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4" styleName="padded-date-container">
                    <span className="date-text">{moment(this.props.date).format("MMMM YYYY")}</span>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <IconButton onClick={this.props.goNextMonth}>
                        <FontIcon className="material-icons">keyboard_arrow_right</FontIcon>
                    </IconButton>
                </div>
            </div>
        )
    }
}

export default cssmodules(styles)(DateSelector);