import React, { Component } from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/timesheetRow.cssmodule.scss';
import DayBox from '../components/dayBox';
import GridRow from '../components/GridRow';
import RaisedButton from 'material-ui/RaisedButton';

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

class TimesheetRow extends Component {
    render() {
        let timesheetBoxes = [];

        for(let i=1;i<=daysInMonth(this.props.month, this.props.year);i++) {
            timesheetBoxes.push(<DayBox text={i} key={i}/>);
        }

        return (
            <GridRow>
                <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2" styleName="center-text-sm">
                    <i className="material-icons">face</i> {this.props.child.firstName + ' '+ this.props.child.lastName}
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    {timesheetBoxes}
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <RaisedButton label="FAKTURA" fullWidth={true}/>
                </div>
            </GridRow>
        )
    }
};

export default cssmodules(styles)(TimesheetRow);