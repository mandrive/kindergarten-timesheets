import React, { Component } from 'react';
import DayBox from '../components/dayBox';

class TimesheetBoxesWrapper extends Component {
    constructor(props) {
        super(props);
    }
    daysInMonth(month,year) {
        return new Date(year, month, 0).getDate();
    }
    render() {
        let timesheetBoxes = [];

        for(let i=1;i<=this.daysInMonth(this.props.month, this.props.year);i++) {
            timesheetBoxes.push(<DayBox text={i} key={i}/>);
        }

        return (
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                {timesheetBoxes}
            </div>
        );
    }
}

export default TimesheetBoxesWrapper;