import React, { Component, PropTypes } from 'react';
import { DatePickerIOS } from 'react-native';
import UnitTimeUtils from './UnitTimeUtils';

export default class UnitTimePicker extends Component {
  static propTypes = {
    unitTime: PropTypes.number.isRequired,
    onUnitTimeChange: PropTypes.func.isRequired,
  };

  render() {
    const { unitTime, onUnitTimeChange } = this.props;
    return (
      <DatePickerIOS
        mode="time"
        date={UnitTimeUtils.unitTimeToDate(unitTime)}
        onDateChange={date =>
          onUnitTimeChange(UnitTimeUtils.dateToUnitTime(date))}
      />
    );
  }
}
