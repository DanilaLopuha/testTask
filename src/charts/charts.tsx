import React from 'react';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';
import './charts.css';


// const data = [
//     { argument: 1, value: 10 },
//     { argument: 2, value: 20 },
//     { argument: 3, value: 30 },
// ];

export class ChartTest extends React.Component {
    chartsData = [
        { argument: 1, value: 30, state: 'test' },
        { argument: 2, value: 10 },
        { argument: 3, value: 20 },
    ];
    render() {
        return (
            <div className="card">
                <div className="countrySelect">
                Select Country <select>
                    <option>Latvia</option>
                    <option>Lithuania</option>
                </select>
                </div>
                <Chart data={this.chartsData} >
                    <ArgumentAxis />
                    <ValueAxis />
                    <LineSeries valueField="value" argumentField="argument" />
                </Chart>
            </div>
        );
    }
}
