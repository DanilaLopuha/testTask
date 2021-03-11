import React from "react";
import './table.css';
import { DataGrid, GridColDef, GridRowsProp, GridSortDirection } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    { field: 'id', hide: true },
    { field: 'country', headerName: 'Country', flex: 1 },
    { field: 'cases', headerName: 'Cases', width: 150, type: 'number' },
    { field: 'deaths', headerName: 'Deaths', width: 150, type: 'number' },
    { field: 'casesTotal', headerName: 'Cases total amount', width: 200, type: 'number' },
    { field: 'deathsTotal', headerName: 'Deaths total amount', width: 200, type: 'number' },
    { field: 'casesThsnd', headerName: 'Cases on 1000', width: 200, type: 'number' },
    { field: 'deathsThsnd', headerName: 'Deaths on 1000', width: 200, type: 'number' },
];



export class TableTest extends React.Component<any> {
    constructor(props: any) {
        super(props)
    }
    state = {
        countries: [],
        gridData: [],
        option: '',
        rangeFrom: 0,
        rangeTo: 9999999,
        }

    componentDidUpdate() {
        if (this.state.countries !== this.props.countries) {
            this.prepareDataForGrid();
        }
    }

    prepareDataForGrid() {
        if (!this.props.countries) { return; }
        const gridData = [];
        let id = 0;
        for (const country in this.props.countries) {
            const countryData = this.props.countries[country];
            const dataItem: any = {
                id: id,
                country: countryData[0].countriesAndTerritories,
                casesTotal: 0,
                deathsTotal: 0,
                cases: countryData[countryData.length - 1].cases,
                deaths: countryData[countryData.length - 1].deaths,
                casesThsnd: 0,
                deathsThsnd: 0
            };

            for (const item of countryData) {
                dataItem.casesTotal += item.cases;
                dataItem.deathsTotal += item.deaths;
            }

            dataItem.casesThsnd = dataItem.casesTotal / countryData[countryData.length - 1].popData2019 * 100000;
            dataItem.deathsThsnd = dataItem.deathsTotal / countryData[countryData.length - 1].popData2019 * 100000;
            id++;

            gridData.push(dataItem);
        }

        this.setState({
            gridData: gridData,
            countries: this.props.countries
        })
    }

    handleChange(event: { target: { value: any; }; }) {
        console.log('set value', event.target.value)
        if (event.target.value) {
            this.setState({
                option: event.target.value
            });
            return;
        }
        this.setState({
            option: ''
        });
    }

    setStart(event: { target: { value: any; }; }){
        if(event.target.value)
        this.setState({
            rangeFrom: event.target.value
        })
    }

    setEnd(event: { target: { value: any; }; }){
        if(event.target.value)
        this.setState({
            rangeTo: event.target.value
        })
    }

    rangedData(raw: any){
        let option = this.state.option
        let rangeFrom = this.state.rangeFrom;
        let rangeTo = this.state.rangeTo;
        let filtered = raw.filter((data: any) => {
            if(data[option] >= rangeFrom && data[option] <= rangeTo){
                return true;
            }
            return false
        });
        return filtered
    }

    render() {
        // let dataInRange = this.rangedData(this.state.gridData);
        // console.log(dataInRange)
        let options = [];
        for (let item of columns) {
            options.push(item);
        }
        options.splice(0, 2);
        return (
            <div>
                <div className="options">
                    <div>
                        Select column
                    <select value={this.state.option} onChange={(e) => { this.handleChange(e); }}>
                            <option value="">select option</option>
                            {options.map((item: any) => (
                                <option key={item.headerName} value={item.field}>
                                    {item.headerName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input 
                    placeholder="from"
                    onChange = {(e) => {this.setStart(e)}}>
                    </input>
                    <input 
                    placeholder="to"
                    onChange = {(e) => {this.setEnd(e)}}>
                    </input>
                </div>
                <div className="clearFilters">
                    <button>Clear filters</button>
                </div>
                <div style={{ height: 600, width: '100%', backgroundColor: 'white' }}>
                    <DataGrid
                        sortModel={[
                            {
                                field: 'country',
                                sort: 'asc' as GridSortDirection
                            }
                        ]}
                        pageSize={20}
                        columns={columns}
                        rows={this.state.gridData}
                    />
                </div>
            </div>
        )
    }

}
