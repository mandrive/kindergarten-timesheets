import React, { Component } from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/timesheetRow.cssmodule.scss';
import GridRow from '../components/GridRow';
import InvoiceButton from '../components/invoiceButton';
import TimesheetBoxesWrapper from '../components/TimesheetBoxesWrapper';
import ChildInfoBox from '../components/ChildInfoBox';

class TimesheetRow extends Component {
    render() {
        return (
            <GridRow>
                <ChildInfoBox child={this.props.child} />
                <TimesheetBoxesWrapper month={this.props.month} year={this.props.year} existingTimesheets={this.props.existingTimesheets} />
                <InvoiceButton />
            </GridRow>
        )
    }
};

export default cssmodules(styles)(TimesheetRow);