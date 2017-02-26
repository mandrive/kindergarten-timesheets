import React, { Component } from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/dayBox.cssmodule.scss';

class DayBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.value > 0
    };

    this.toggleDay = this.toggleDay.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      this.setState({
        checked: nextProps.value > 0
      });
    }
  }
  toggleDay() {
    this.setState({
      checked: !this.state.checked
    });
  }
  render() {
    return (
      <div styleName={this.state.checked ? 'default-day-box checked-day-box' : 'default-day-box'} onClick={this.toggleDay} >
        {this.props.text}
      </div>
    );
  }
}

export default cssmodules(styles, {allowMultiple: true})(DayBox);
