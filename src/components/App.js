import React from 'react';
import AppBar from 'material-ui/AppBar';

class AppComponent extends React.Component {
  
  render() {
    return (
      <div className="main-app-container container">
      <div className="row">
        <AppBar title="Community" />
        </div>
      </div>
    );
  }
}

export default AppComponent;
