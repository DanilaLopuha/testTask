import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDatepicker from '../datepicker/datepicker';
import { ChartTest } from '../charts/charts';
import { TableTest } from '../table/table';
import { CovidDataRecord } from '../covidData';
import _ from 'lodash';

class TabExample extends React.Component<any> {
    constructor(props: any) {
        super(props);
        const date = new Date();
        // this.state.startDate.setFullYear(date.getFullYear() - 1, date.getMonth(), date.getDate());
        // this.state.startDate.setHours(0, 0, 0, 0);
    }
    state = {
        rawData: [] as CovidDataRecord[],
        data: [] as CovidDataRecord[],
        startDate: new Date('12/31/2019'),
        endDate: new Date('12/14/2020'),
        groupedData: [],
    };
    componentDidMount(): void {
        const url = "/covid19/casedistribution/json/";
        fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(data => data.json()).then((response) => {
            const testData: CovidDataRecord[] = response.records;
            for (let item of testData) {
                const approxDate = `${item.month}/${item.day}/${item.year}`;
                item.date = new Date(approxDate);
            }
            const sorted = testData.sort((a: CovidDataRecord, b: CovidDataRecord) => a.date.getTime() > b.date.getTime() ? 1 : -1);
            this.setState({
                rawData: sorted,
            });
        });
    }

    render() {
        const data = this.getFilteredDataItems(this.state.rawData);
        const countries = _.groupBy(data, function (data) {
            return data.countriesAndTerritories;
        });
        console.log('changed data by date on parent component', data);
        return (
            <div className="tabs">
                <div className="datePick">
                    <MyDatepicker
                        onDateChange={(startDate: Date, endDate: Date) => { this.handleInput(startDate, endDate); }}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                    />
                </div>
                <Tabs defaultActiveKey="chart">
                    <Tab eventKey="home" title="Table">
                        <TableTest 
                        data={data}
                        countries={countries}
                         />
                        {/* <TestHttpCall /> */}
                    </Tab>
                    <Tab eventKey="chart" title="Chart">
                        <ChartTest
                            countries={countries}
                            data={data}
                        />
                    </Tab>
                </Tabs>
            </div>
        );
    }

    handleInput(startDate: Date, endDate: Date) {
        this.setState({
            startDate,
            endDate
        });
    }

    private getFilteredDataItems(raw: CovidDataRecord[]): CovidDataRecord[] {
        let startDate = new Date(this.state.startDate);
        let endDate = new Date(this.state.endDate);
        let filtered: CovidDataRecord[] = raw.filter(dataRecord => {
            if (dataRecord.date >= startDate && dataRecord.date <= endDate) {
                return true;
            }
            return false;
        });
        return filtered;
    }
}

export default TabExample;
