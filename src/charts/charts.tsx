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
        data: [],
        dataLength: 0
    }

    componentDidUpdate() {
        if (this.state.country && this.state.data.length !== this.props.countries[this.state.country].length ) {
            this.setState({
                dataLength: this.props.data.length,
                data: this.props.countries[this.state.country]
            });
            return null;
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
                <Chart 
                data={this.state.data}> 
                {/* <ArgumentScale factory={scaleTime}/> */}
                    <ArgumentAxis />
                    <ValueAxis />
                    <LineSeries name="Cases" valueField="cases" argumentField="dateRep" />
                    <LineSeries name="Deaths" valueField="deaths" argumentField="dateRep" />
                    <Legend position="bottom" ></Legend>
                </Chart>
            </div>
        );
    }
}
