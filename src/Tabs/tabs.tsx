import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import MyChart from '../charts/charts';
import MyDatepicker from '../datepicker/datepicker';
import SampleText from '../tableText/tableText';
import { ChartTest } from '../charts/charts';
import { TableTest } from '../table/table';

class TabExample extends React.Component {
    render() {
        return (
            <div>
                <MyDatepicker />
                <Tabs defaultActiveKey="chart">
                    <Tab eventKey="home" title="Home">
                        <SampleText />
                        <TableTest />
                    </Tab>
                    <Tab eventKey="chart" title="Chart">
                        <ChartTest />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default TabExample;
