import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


  class MyDatepicker extends React.Component {
    state = {
      startDate: new Date()
    };
  
    render() {
      const { startDate } = this.state;
      return <DatePicker selected={startDate} onChange={this.handleChange} />;
    }
  
    handleChange(startDate: Date) {
      this.setState({
        startDate
      });
    };
  }

  export default MyDatepicker;