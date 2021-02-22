import React from 'react';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';


// const data = [
//     { argument: 1, value: 10 },
//     { argument: 2, value: 20 },
//     { argument: 3, value: 30 },
// ];

export class ChartTest extends React.Component {
    chartsData = [
        { argument: 1, value: 10 },
        { argument: 2, value: 20 },
        { argument: 3, value: 30 },
    ];
    render() {
        return (
            <div className="card">
                <Chart data={this.chartsData} >
                    <ArgumentAxis />
                    <ValueAxis />
                    <LineSeries valueField="value" argumentField="argument" />
                </Chart>
            </div>
        );
    }
}
