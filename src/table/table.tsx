import React from "react";
import { Table } from "react-bootstrap";


export class TableTest extends React.Component {
    render() {
        return (
            < Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Amount of cases</th>
                        <th>Amount of deaths</th>
                        <th>Total amount of cases</th>
                        <th>Total amount of deaths</th>
                        <th>Cases amount on 1000</th>
                        <th>Deaths amount of cases</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Afghanistan</td>
                        <td>100</td>
                        <td>50</td>
                        <td>@mdo</td>
                        <td>Afghanistan</td>
                        <td>100</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </Table >
        )
    }

}
