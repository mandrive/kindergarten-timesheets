import React, { Component } from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/timesheetRow.cssmodule.scss';
import DayBox from '../components/dayBox';

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

class TimesheetRow extends Component {
    render() {
        let timesheetBoxes = [];

        for(let i=0;i<daysInMonth(this.props.month, this.props.year);i++) {
            timesheetBoxes.push(<DayBox text={i} key={i}/>);
        }

        return (
            <div styleName="content-wrapper">
                <div styleName="child-info-container">
                    <i className="material-icons">face</i>
                    Jakiś
                    Dzieciak
                </div>
                <div styleName="inline-block-wrapper">
                    {timesheetBoxes}
                </div>
            </div>
        )
    }
};

export default cssmodules(styles)(TimesheetRow);