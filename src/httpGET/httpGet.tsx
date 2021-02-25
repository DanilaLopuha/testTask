import React from 'react';

export default class TestHttpCall extends React.Component {
    state = {
        loading: true
    };

    async componentDidMount(){
        const url = "https://opendata.ecdc.europa.eu/covid19/casedistribution/json/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render(){
        return <div>
            {this.state.loading ? <div>loading...</div> : <div>person...</div>}
        </div>
    }
}



// import * as React from 'react';                                  |
// import { RouteComponentProps } from 'react-router-dom';          |   not sure yet,
// import axios from 'axios';                                       |   if I need this?
// var _ = require('lodash');                                       |

