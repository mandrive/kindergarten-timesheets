import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TimesheetRow from '../components/timesheetRow';
import cssmodules from 'react-css-modules';
import styles from './styles/app.cssmodule.scss';
import data from './../data/children';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1
    }
  }
  render() {
    console.log(data);
    let timesheetRows = data.map(child => (<TimesheetRow month={this.state.month} year={this.state.year} child={child} />));

    return (
      <div className="container" styleName="main-app-container">
        {timesheetRows}
      </div>
    );
  }
}

export default cssmodules(styles)(AppComponent);
