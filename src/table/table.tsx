import React from "react";
import { Pagination } from "react-bootstrap";
import './table.css';
import DataGrid from 'react-data-grid';

const columns = [
    { key: 'country', name: 'Country' },
    { key: 'casesAmount', name: 'Amount of cases' },
    { key: 'deathsAmount', name: 'Amount of deaths'},
    { key: 'casesTotal', name: 'Total amount of cases'},
    { key: 'deathsTotal', name: 'Total amount of deaths'},
    { key: 'casesOn1000', name: 'Cases amount on 1000'},
    { key: 'deathsOnCases', name: 'Deaths amount of cases'}
  ];
  
  const rows = [
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
    { country: 'Latvia', casesAmount: 1203, deathsAmount: 121, casesTotal: 4562, deathsTotal: 722, casesOn1000: 99, deathsOnCases: 123  },
  ];

export class TableTest extends React.Component<any> {
    constructor(props: any){
        super(props)
    }
    render() {
        // console.log('lets check: ', this.props.data);
        return (
            <div>
                <div className="options">
                    <div>
                        <input placeholder="country search"></input>
                        <button>search</button>
                    </div>
                    <select placeholder="filter by column">
                        <option>Column1</option>
                        <option>Column2</option>
                        <option>Column3</option>
                    </select>
                    <input placeholder="from"></input>
                    <input placeholder="to"></input>
                </div>
                <div className="clearFilters">
                    <button>Clear filters</button>
                </div>
                <DataGrid
                columns={columns}
                rows={rows}
                />
                <div className="paginator">
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Ellipsis />
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        )
    }

}
