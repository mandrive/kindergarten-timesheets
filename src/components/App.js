import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TimesheetRow from '../components/timesheetRow';
import cssmodules from 'react-css-modules';
import styles from './styles/app.cssmodule.scss';
import { fetchChildren } from './../actions';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import DateSelector from './dateSelector';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth()
    }

    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }
  componentDidMount() {
    this.props.getAllChildren();
  }
  prevMonth() {
    let newMonth = this.state.month < 0 ? 11 : this.state.month - 1;
    let newYear = newMonth > this.state.month ? this.state.year - 1 : this.state.year;

    this.setState({
      month: newMonth,
      year: newYear
    });
  }
  nextMonth() {
    let newMonth = this.state.month > 11 ? 0 : this.state.month + 1;
    let newYear = newMonth < this.state.month ? this.state.year + 1 : this.state.year;

    this.setState({
      month: newMonth,
      year: newYear
    });
  }
  render() {
    let timesheetRows = this.props.children.map(child => (<TimesheetRow month={this.state.month} year={this.state.year} child={child} key={child.id} />));
    let circularProgress = this.props.fetching ? <CircularProgress /> : <div />
    let selectedDate = new Date(this.state.year, this.state.month);

    return (
      <div className="container" styleName="main-app-container">
        {circularProgress}
        <DateSelector date={selectedDate} goPrevMonth={this.prevMonth} goNextMonth={this.nextMonth}/>
        {timesheetRows}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    children: state.groups.selectedGroup ? state.children.byId.filter(c => c.groupId === state.groups.selectedGroup.id) : [],
    fetching: state.children.fetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllChildren: () => {
      dispatch(fetchChildren())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(cssmodules(styles)(AppComponent));
