import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDatepicker from '../datepicker/datepicker';
import { ChartTest } from '../charts/charts';
import { TableTest } from '../table/table';
import { CovidDataRecord } from '../covidData';
import TestHttpCall from '../httpGET/httpGet';
import { reverse } from 'lodash';

class TabExample extends React.Component {
    dates: Date[] = [];
    state = {
        rawData: [],
        data: [],
    };
    componentDidMount(): void {
        const url = "/covid19/casedistribution/json/";
        fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
        }).then(data => data.json()).then((response) => {
            const testData = response.records;
            for(let item of testData){
                const approxDate = `${item.month}/${item.day}/${item.year}`;
                this.dates.push(new Date(approxDate));
            }
            const sorted = testData.sort((a: any, b: any) => b.approxDate - a.approxDate)
            this.setState({
                rawData: sorted, //WORKS!
            });
        });
    }

    render() {
        const data = this.getFilteredDataItems(this.state.rawData);
        return (
            <div className="tabs">
                <div className="datePick">
                    <MyDatepicker />
                </div>
                <Tabs defaultActiveKey="chart">
                    <Tab eventKey="home" title="Table">
                        <TableTest data={data} />
                        {/* <TestHttpCall /> */}
                    </Tab>
                    <Tab eventKey="chart" title="Chart">
                        <ChartTest data={data} />
                    </Tab>
                </Tabs>
            </div>
        );
    }

    private getFilteredDataItems(raw: CovidDataRecord[]) {
        // data filtration must be implemented here
        return raw;
    }
}

export default TabExample;
