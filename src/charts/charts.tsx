import React, { useState } from 'react';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
    Legend,
} from '@devexpress/dx-react-chart-bootstrap4';
import './charts.css';
import _ from 'lodash';


export class ChartTest extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    state = {
        countries: [],
        country: '',
        data: []
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.countries !== prevProps.countries) {
            this.setState({
                countries: this.props.countries,
            })
        }
    }

    handleChange(event: { target: { value: any; }; }){
        console.log('set value', event.target.value)
        if (event.target.value) {
            this.setState({
                data: this.props.countries[event.target.value],
                country: event.target.value
            });
            return;
        }
        this.setState({
            data: []
        });
    }

    render() {
        let countries = [];
        for(let country in this.props.countries) {
            countries.push(country);
        }
        countries = countries.sort();
        // console.log('render', countries);
        return (
            <div className="card" >
                <div className="countrySelect">
                    Select Country
                    <select value={this.state.country} onChange={(e)=> {this.handleChange(e);}}>
                        <option value="">select country</option>
                    {countries.map((item: any) => (
                        <option key={item} value={item}>
                        {item}
                        </option>
                    ))}
                    </select>
                </div>
                <Chart data={this.state.data}> 
                    <ArgumentAxis />
                    <ValueAxis />
                    <LineSeries name="Cases" valueField="cases" argumentField="date" />
                    <LineSeries name="Deaths" valueField="deaths" argumentField="date" />
                    <Legend position="bottom"></Legend>
                </Chart>
            </div>
        );
    }
}
