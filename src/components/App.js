import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TimesheetRow from '../components/timesheetRow';
import cssmodules from 'react-css-modules';
import styles from './styles/app.cssmodule.scss';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1
    }
  }
  render() {
    return (
      <div className="container" styleName="main-app-container">
        <TimesheetRow month={this.state.month} year={this.state.year} />
      </div>
    );
  }
}

export default cssmodules(styles)(AppComponent);
