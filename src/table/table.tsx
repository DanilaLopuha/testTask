import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import MyChart from '../charts/charts';
import MyDatepicker from '../datepicker/datepicker';
import SampleText from '../tableText/tableText';
import ChartTest from '../charts/charts';
  
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
            <ChartTest />
          </Tab>
        </Tabs>
      );
    }
  }

  export default TabExample;
  