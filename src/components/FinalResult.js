import React from "react";
import { Table } from "react-bootstrap";

const FinalResult = ({ psidValue, empName, managerName, Month, Year }) => {
  const monthYear = `${Month},${Year}`;
  return (
    <>
      <h2>SUMMARY</h2>
      <Table bordered hover className="ms-start me-auto w-75 mt-10">
        <thead className="bg-primary">
          <tr>
            <th>Guardian Manager</th>
            <th>ITC Employee Name</th>
            <th>Employee Id</th>
            <th>Month(MMM,YYYY)</th>
            <th>No. of Days Present</th>
            <th>No. of Days Leaves</th>
            <th>Public Holiday/Customer Holiday(Except Weekends)</th>
            <th>Leave Dates(DD-MMM)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{managerName}</td>
            <td>{empName}</td>
            <td>{psidValue}</td>
            <td>{monthYear}</td>
            <td>16</td>
            <td>2</td>
            <td>2</td>
            <td>12-Mar, 15-Mar</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default FinalResult;
