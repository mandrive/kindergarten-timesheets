import React, { Component } from 'react';
import ApplicationBar from './../components/applicationBar';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { fetchGroups, selectGroup } from './../actions/actions';

class ApplicationContainer extends Component {
    componentDidMount() {
        this.props.getAllGroups();
    }
    render() {
        return (
            <div>
                <ApplicationBar fetchingGroups={this.props.fetchingGroups} groups={this.props.groups} selectGroupHandler={this.props.selectGroup} title={this.props.title} />
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        groups: state.groups.byId,
        title: state.groups.selectedGroup ? state.groups.selectedGroup.name : 'Wybierz grupę',
        fetchingGroups: state.groups.fetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllGroups: () => {
            dispatch(fetchGroups())
        },
        selectGroup: (id) => {
            dispatch(selectGroup(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(ApplicationContainer));