import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './datepicker.css';

import "react-datepicker/dist/react-datepicker.css";


class MyDatepicker extends React.Component {
  state = {
    fixedDate: new Date("03/15/2021"),
    startDate: new Date("03/21/2021"),
    endDate: new Date("03/29/2021"),
  };

  render() {
    // return <DatePicker selected={this.state.startDate} onChange={(date) => { this.setStartDate(date as Date); }} />;
    return (
      <>
      Period from 
        <DatePicker
          selected={this.state.startDate}
          onChange={date => {this.setStartDate(date as Date)}}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          minDate={this.state.fixedDate}
        />
        to 
        <DatePicker
          selected={this.state.endDate}
          onChange={(date) => {this.setEndDate(date as Date)}}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          minDate={this.state.startDate}
        />
      </>
    );
  }

  setStartDate(startDate: Date) {
    this.setState({
      startDate
    });
  };
  setEndDate(endDate: Date) {
    this.setState({
      endDate
    })
  };
}

export default MyDatepicker;