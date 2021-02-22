import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SampleText extends React.Component {
    render() {
      return (
        <div>Hello world!</div>
      );
    }
  }
  
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
  
  class TabExample extends React.Component {
    render() {
      return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <SampleText />
            <MyDatepicker />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <SampleText />
          </Tab>
        </Tabs>
      );
    }
  }

  export default TabExample;
  