import React, { Component } from 'react';
import DayBox from '../components/dayBox';

class TimesheetBoxesWrapper extends Component {
  static daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }
  constructor(props) {
    super(props);
    this.state = {
      edited: false,
      currentTimesheet: this.props.existingTimesheets
      ? {...this.props.existingTimesheets}
      : {
        id: -1,
        childId: this.props.child.id,
        month: this.props.month,
        year: this.props.year,
        presence: new Array(TimesheetBoxesWrapper.daysInMonth(this.props.month, this.props.year)).fill(0)
      }
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      currentTimesheet: {
        ...this.state.currentTimesheet,
        presence: new Array(TimesheetBoxesWrapper.daysInMonth(nextProps.month, nextProps.year)).fill(0)
      }
    });
  }
  render() {
    const timesheetBoxes = [];
    for (let i = 1; i <= TimesheetBoxesWrapper.daysInMonth(this.props.month, this.props.year); i += 1) {
      const presenceValue = this.props.existingTimesheets && this.props.existingTimesheets.presence.length >= i ? this.props.existingTimesheets.presence[i - 1] : 0;
      timesheetBoxes.push(<DayBox text={i} key={i} value={presenceValue} />);
    }

    return (
      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
        {timesheetBoxes}
      </div>
    );
  }
}

TimesheetBoxesWrapper.propTypes = {
  month: React.PropTypes.number.isRequired,
  year: React.PropTypes.number.isRequired,
  existingTimesheets: React.PropTypes.shape({
    id: React.PropTypes.number,
    childId: React.PropTypes.number,
    month: React.PropTypes.number,
    year: React.PropTypes.number,
    presence: React.PropTypes.arrayOf(React.PropTypes.number)
  })
};

export default TimesheetBoxesWrapper;
