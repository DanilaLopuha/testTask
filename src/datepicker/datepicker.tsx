import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


  class MyDatepicker extends React.Component {
    state = {
      startDate: new Date()
    };
  
    render() {
      return <DatePicker selected={this.state.startDate} onChange={(date) => {this.handleChange(date as Date);}} />;
    }
  
    handleChange(startDate: Date) {
      this.setState({
        startDate
      });
    };
  }

  export default MyDatepicker;