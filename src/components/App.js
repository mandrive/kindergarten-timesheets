import React, { Component, PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import styles from './styles/app.cssmodule.scss';
import TimesheetRow from '../components/timesheetRow';
import { fetchChildren } from './../actions';
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
  }
  nextMonth() {
    const newMonth = this.state.month > 11 ? 0 : this.state.month + 1;
    const newYear = newMonth < this.state.month ? this.state.year + 1 : this.state.year;

    this.setState({
      month: newMonth,
      year: newYear
    });
  }
  render() {
    const timesheetRows = this.props.children.map(child =>
    (<TimesheetRow
      month={this.state.month}
      year={this.state.year}
      child={child}
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
  isGroupSelected: !!(state.groups.selectedGroup && state.groups.selectedGroup.id > 0),
  fetching: state.children.fetching
});

const mapDispatchToProps = dispatch => ({
  getAllChildren: () => {
    dispatch(fetchChildren());
  }
});

AppComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetching: PropTypes.bool.isRequired,
  isGroupSelected: PropTypes.bool.isRequired,
  getAllChildren: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(cssmodules(styles)(AppComponent));
