import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TimesheetRow from '../components/timesheetRow';
import cssmodules from 'react-css-modules';
import styles from './styles/app.cssmodule.scss';
import { fetchChildren } from './../actions/actions';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1
    }
  }
  componentDidMount() {
    this.props.getAllChildren();
  }
  render() {
    let timesheetRows = this.props.children.map(child => (<TimesheetRow month={this.state.month} year={this.state.year} child={child} key={child.id} />));
    let circularProgress = this.props.fetching ? <CircularProgress /> : <div />
    return (
      <div className="container" styleName="main-app-container">
        {circularProgress}
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
