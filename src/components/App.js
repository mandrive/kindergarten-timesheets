import React, { Component, PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import styles from './styles/app.cssmodule.scss';
import TimesheetRow from '../components/timesheetRow';
import { fetchChildren, fetchTimesheetsForGroup } from './../actions';
import DateSelector from './dateSelector';

class AppComponent extends Component {
  constructor(props) {
    super(props);

    const currentDate = new Date();

    this.state = {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth()
    };

    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }
  componentDidMount() {
    this.props.getAllChildren();
  }
  prevMonth() {
    const newMonth = this.state.month < 0 ? 11 : this.state.month - 1;
    const newYear = newMonth > this.state.month ? this.state.year - 1 : this.state.year;

    this.setState({
      month: newMonth,
      year: newYear
    });

    this.props.getTimesheetsForSelectedGroup(this.props.selectedGroup.id);
  }
  nextMonth() {
    const newMonth = this.state.month > 11 ? 0 : this.state.month + 1;
    const newYear = newMonth < this.state.month ? this.state.year + 1 : this.state.year;

    this.setState({
      month: newMonth,
      year: newYear
    });

    this.props.getTimesheetsForSelectedGroup(this.props.selectedGroup.id);
  }
  render() {
    const timesheetRows = this.props.children.map(child =>
    (<TimesheetRow
      month={this.state.month}
      year={this.state.year}
      child={child}
      existingTimesheets={this.props.timesheets.find(t => t.childId === child.id && t.month === this.state.month && t.year === this.state.year)}
      key={child.id} />));
    const circularProgress = this.props.fetching ? (<CircularProgress />) : (<div />);
    const selectedDate = new Date(this.state.year, this.state.month);
    const dateSelector = this.props.isGroupSelected
    ? (<DateSelector
      date={selectedDate}
      goPrevMonth={this.prevMonth}
      goNextMonth={this.nextMonth}/>)
    : (<div/>);

    return (
      <div className="container" styleName="main-app-container">
        {circularProgress}
        {dateSelector}
        {timesheetRows}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  children: state.groups.selectedGroup
              ? state.children.byId.filter(c => c.groupId === state.groups.selectedGroup.id)
              : [],
  selectedGroup: state.groups.selectedGroup,
  isGroupSelected: !!(state.groups.selectedGroup && state.groups.selectedGroup.id > 0),
  timesheets: state.timesheets.byId,
  fetching: state.children.fetching
});

const mapDispatchToProps = dispatch => ({
  getAllChildren: () => {
    dispatch(fetchChildren());
  },
  getTimesheetsForSelectedGroup: (groupId) => {
    dispatch(fetchTimesheetsForGroup(groupId));
  }
});

AppComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetching: PropTypes.bool.isRequired,
  selectedGroup: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  isGroupSelected: PropTypes.bool.isRequired,
  timesheets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    childId: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    presence: PropTypes.arrayOf(PropTypes.number)
  })),
  getAllChildren: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(cssmodules(styles)(AppComponent));
