import React, { Component } from 'react';
import DayBox from '../components/dayBox';

class TimesheetBoxesWrapper extends Component {
    constructor(props) {
        super(props);
    }
    daysInMonth(month,year) {
        return new Date(year, month + 1, 0).getDate();
    }
    render() {
        let timesheetBoxes = [];
        for(let i=1;i<=this.daysInMonth(this.props.month, this.props.year);i++) {
            var presenceValue = this.props.existingTimesheets && this.props.existingTimesheets.presence.length >= i ? this.props.existingTimesheets.presence[i-1] : 0;
            timesheetBoxes.push(<DayBox text={i} key={i} value={presenceValue}/>);
        }

        return (
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                {timesheetBoxes}
            </div>
        );
    }
}

export default TimesheetBoxesWrapper;