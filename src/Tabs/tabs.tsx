import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDatepicker from '../datepicker/datepicker';
import { ChartTest } from '../charts/charts';
import { TableTest } from '../table/table';
import TestHttpCall from '../httpGET/httpGet';

class TabExample extends React.Component {
    render() {
        return (
            <div className="tabs">
                <div className="datePick">
                    Period from <MyDatepicker /> to <MyDatepicker />
                </div>
                <Tabs defaultActiveKey="chart">
                    <Tab eventKey="home" title="Home">
                        <TableTest />
                        {/* <TestHttpCall /> */}
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
