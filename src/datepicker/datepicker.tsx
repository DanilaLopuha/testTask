import React, { SyntheticEvent, useState } from "react";
import DatePicker from "react-datepicker";
import './datepicker.css';

import "react-datepicker/dist/react-datepicker.css";


class MyDatepicker extends React.Component<any> {
  constructor(props: any){
    super(props)
  };
  state = {
    fixedEndDate: new Date('12/14/2020'),
    fixedStartDate: new Date('12/31/2019'),
    startDate: this.props.startDate,
    endDate: this.props.endDate,
  };

  render() {
    return (
      <>
      Period from 
        <DatePicker
          selected={this.state.startDate}
          onChange={date => {this.setStartDate(date as Date)}}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          minDate={this.state.fixedStartDate}
        />
        to 
        <DatePicker
          selected={this.state.endDate}
          onChange={date => {this.setEndDate(date as Date)}}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          minDate={this.state.startDate}
          maxDate={this.state.fixedEndDate}
        />
      </>
    );
  }

  setStartDate(startDate: Date) {
    this.setState({
      startDate
    });
    this.props.onDateChange(startDate, this.state.endDate);
  }
  setEndDate(endDate: Date) {
    this.setState({
      endDate
    });
    this.props.onDateChange(this.state.startDate, endDate);
  }
}

export default MyDatepicker;