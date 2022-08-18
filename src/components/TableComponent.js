import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./Component.css";
import { dateData } from "../staticData";

const TableComponent = ({ Month, Year, psidValue, empName, managerName }) => {
  const [tableData, setTableData] = useState(
    dateData.filter((data) => data.date.includes(`${Month}-${Year}`))
  );

  const monthYear = `${Month}-${Year}`;
  const [countDays, setCountDays] = useState({
    billableDays: "",
    noDaysPresent: "",
    noDaysLeave: "",
    noOfHolidays: "",
    daysOfHoliday: "",
  });

  useEffect(() => {
    const billDays = tableData.filter(
      (data) => data.status !== "Customer/Public Holiday"
    ).length;
    const daysPresent = tableData.filter((data) => data.status === "Present")
      .length;
    const daysLeave = tableData.filter((data) => data.status === "Leave")
      .length;
    const holDays = tableData.filter(
      (data) => data.status === "Customer/Public Holiday"
    ).length;
    const dayOfHoliday = tableData
      .filter((data) => data.status === "Leave")
      .map((elm) => {
        const elem = elm.date.slice(0, -5);
        return elem;
      })
      .join(",");
    console.log(dayOfHoliday);

    setCountDays((prevState) => {
      return {
        ...prevState,
        billableDays: billDays,
        noDaysPresent: daysPresent,
        noDaysLeave: daysLeave,
        noOfHolidays: holDays,
        daysOfHoliday: dayOfHoliday,
      };
    });
  }, [tableData]);

  const handleChangeStatus = (event, data) => {
    const selectedValue = event.target.value;
    const filteredData = [...tableData];
    const index = filteredData.findIndex((elm) => elm.date === data.date);
    filteredData[index].status = selectedValue;
    if (selectedValue === "Present") filteredData[index].wrkHours = 8;
    if (selectedValue === "Half Day") filteredData[index].wrkHours = 4;
    if (selectedValue !== "Half Day" && selectedValue !== "Present")
      filteredData[index].wrkHours = "";
    setTableData(filteredData);
  };

  return (
    <>
      <Table
        hover
        bordered
        className="ms-2 me-auto w-75 mt-10 table-sm border-primary rounded shadow-sm fs-6"
      >
        <thead className="bg-primary col-3 fw-bold fs-6">
          <tr>
            <th>DATE</th>
            <th>DAY</th>
            <th>WORKING HOURS</th>
            <th>STATUS</th>
            <th>REMARKS</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr
              className={
                data.status === "Present"
                  ? "bg-light"
                  : data.status === "Customer/Public Holiday"
                  ? "bg-info"
                  : data.status === "Leave"
                  ? "bg-danger"
                  : data.status === "Half Day"
                  ? "bg-warning"
                  : "bg-success"
              }
            >
              <td fs-6>{data.date}</td>
              <td>{data.day}</td>
              <td>{data.wrkHours}</td>
              <td>
                <select
                  id="inputStatus"
                  class="selectpicker"
                  value={data.status}
                  onChange={(event) => handleChangeStatus(event, data)}
                >
                  <option>Present</option>
                  <option>Customer/Public Holiday</option>
                  <option>Leave</option>
                  <option>Other</option>
                  <option>Half Day</option>
                </select>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <form class="row g-3 ms-2 me-auto mb-2 mt-2 w-75 p-2 fs-6 bg-light border border-primary rounded shadow-sm">
        <div class="col-md-4">
          <label for="stdBillDays" class="col-form-label fs-14 ">
            STD. BILLABLE DAYS
          </label>
          <input
            type="number"
            class="form-control"
            id="stdBillDays"
            value={countDays.billableDays}
          />
        </div>
        <div class="col-md-4">
          <label for="noDaysPresent" class="col-form-label fs-14">
            No. of Days Present
          </label>
          <input
            type="number"
            class="form-control"
            id="noDaysPresent"
            value={countDays.noDaysPresent}
          />
        </div>
        <div class="col-md-4">
          <label for="noDaysLeave" class="col-form-label fs-14">
            No. of Days Leave
          </label>
          <input
            type="number"
            class="form-control"
            id="noDaysLeave"
            value={countDays.noDaysLeave}
          />
        </div>
      </form>
      <h2 className="text-secomdary ms-2 font-monospace">SUMMARY</h2>
      <Table bordered hover className="ms-2 me-auto w-75 mt-10 fs-6">
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
        <tbody className="bg-light">
          <tr>
            <td>{managerName}</td>
            <td>{empName}</td>
            <td>{psidValue}</td>
            <td>{monthYear}</td>
            <td>{countDays.noDaysPresent}</td>
            <td>{countDays.noDaysLeave}</td>
            <td>{countDays.noOfHolidays}</td>
            <td>{countDays.daysOfHoliday}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;