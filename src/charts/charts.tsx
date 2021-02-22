import React from 'react';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';

// const data = [
//     { argument: 1, value: 10 },
//     { argument: 2, value: 20 },
//     { argument: 3, value: 30 },
// ];

class ChartTest extends React.Component {
    render() {
        const data = [
            { argument: 1, value: 0 },
            { argument: 2, value: 20 },
            { argument: 3, value: 100 },
        ];
        return (
            <div className="card">
                <Chart
                    data={data}
                >
                    <ArgumentAxis />
                    <ValueAxis />

                    <LineSeries valueField="value" argumentField="argument" />
                </Chart>
            </div>
        )
    }
}

export default ChartTest