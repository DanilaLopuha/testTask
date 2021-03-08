import React from 'react';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';
import './charts.css';
import _ from 'lodash';


export class ChartTest extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    state = {
        countries: []
    }

    componentDidUpdate() {
        if (this.props.countries !== this.state.countries) {
            this.setState({
                countries: this.props.countries
            })
        }
    }

    handleChange(event: { target: { value: any; }; }){
        this.setState({
            countries : event.target.value
        })
    }

    render() {
        const countries = this.state.countries
        let groupedData: any = { countries };
        console.log(groupedData.countries);
        return (
            <div className="card" >
                <div className="countrySelect">
                    Select Country
                <select /*onChange={this.handleChange}*/>
                        <option>
                            {groupedData.countries.toString()}
                        </option>
                    </select>
                </div>
                <Chart data={this.props.data}>
                    <ArgumentAxis />
                    <ValueAxis />
                    <LineSeries valueField="cases" argumentField="date" />
                </Chart>
            </div>
        );
    }
}
