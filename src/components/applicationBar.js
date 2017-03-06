import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import CircularProgress from 'material-ui/CircularProgress';
import muiThemeable from 'material-ui/styles/muiThemeable';

class GroupMenu extends Component {
  render() {
    const menuItems = this.props.groups.map(group => <MenuItem primaryText={group.name} key={group.id} onTouchTap={() => { this.props.selectGroupHandler(group.id); }} />);

    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}} >
          {menuItems}
        </IconMenu>
      );
  }
}

class ApplicationBar extends Component {
  render() {
    return (
      <AppBar
        title={this.props.title}
        iconElementLeft={<GroupMenu groups={this.props.groups} selectGroupHandler={this.props.selectGroupHandler} />}
        showMenuIconButton={!this.props.fetchingGroups}
        iconElementRight={this.props.fetchingGroups ? <CircularProgress color={this.props.muiTheme.palette.primary2Color}/> : <div />} />
      );
  }
}

export default muiThemeable()(ApplicationBar);
