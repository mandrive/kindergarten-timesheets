import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import TestComponent from '../components/TestComponent';

class AppComponent extends React.Component {
  
  render() {
    return (
      <div className="main-app-container container">
      <div className="row">
        <AppBar title="Community" />
        <TestComponent />
        <Link to="/test">LINK TO TEST!</Link>
        </div>
      </div>
    );
  }
}

export default AppComponent;
