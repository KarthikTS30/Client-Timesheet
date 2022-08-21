import React, { useState } from "react";
import TableComponent from "./components/TableComponent";
import { months, dateData } from "./staticData";
import "./App.css";

function App() {
  const [showTables, setShowTables] = useState(false);
  const [psidValue, setPsidValue] = useState();
  const [empName, setEmpName] = useState();
  const [managerName, setManagerName] = useState();
  const [emailId, setEmailId] = useState();
  // const [managerEmail, setManagerEmail] = useState();
  const [selectYear, setSelectYear] = useState();
  const [selectMonth, setSelectMonth] = useState();
  const [dateDataState, setDateDataState] = useState(dateData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTables(true);
    const filteredData = dateData.filter((data) =>
      data.date.includes(`${selectMonth}-${selectYear}`)
    );
    setDateDataState(filteredData);
  };

  const handleInputChange = (event) => {
    const { value, id } = event.target;

    if (id === "psid") {
      setPsidValue(value);
    }
    if (id === "name") {
      setEmpName(value);
    }
    if (id === "guardianMgr") {
      setManagerName(value);
    }
    if (id === "emailId") {
      setEmailId(value);
    }
    // if (id === "mgrEmail") {
    //   setManagerEmail(value);
    // }
  };

  const handleChangeYear = (event) => {
    const selectedValue = event.target.value;
    setSelectYear(selectedValue);
  };

  const handleChangeMonth = (event) => {
    const selectedValue = event.target.value;
    setSelectMonth(selectedValue);
  };

  return (
    <div className="App">
      <div className="d-flex justify-content-between align-items-center bg-dark mb-4">
        <img src="itcLogo.png" className="itcLogo" alt="itcAlt" />
        <h2 className="d-flex justify-content-center mb-3 p-10 text-white">
          ITC INFOTECH MONTHLY TIMESHEET
        </h2>
        <img src="guardianLogo.png" className="guardLogo" alt="guardAlt" />
      </div>
      <form class="col g-3 ms-4 me-4 mb-2 w-90" onSubmit={handleSubmit}>
        <div className="shadow-sm rounded row mt-10 p-3 bg-light border border-primary ">
          <div class="col-md-3">
            <label for="psid" class="form-label mb-1">
              PSID
            </label>
            <input
              type="number"
              class="form-control mb-2"
              id="psid"
              onChange={handleInputChange}
              required
            />
          </div>
          <div class="col-md-3">
            <label for="name" class="form-label mb-1">
              NAME
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div class="col-md-3">
            <label for="doj" class="form-label mb-1">
              DATE OF JOINING
            </label>
            <input type="date" class="form-control" id="doj" required />
          </div>
          <div class="col-md-3">
            <label for="workLocation" class="form-label mb-1">
              WORK LOCATION
            </label>
            <input
              type="text"
              class="form-control"
              id="workLocation"
              required
            />
          </div>
          <div class="col-md-3">
            <label for="guardianMgr" class="form-label mb-1">
              GUARDIAN MANAGER
            </label>
            <input
              type="text"
              class="form-control"
              id="guardianMgr"
              onChange={handleInputChange}
              required
            />
          </div>
          <div class="col-md-3">
            <label for="workHours" class="form-label mb-1">
              TOTAL WORKING HOURS IN A DAY
            </label>
            <input
              type="number"
              class="form-control"
              id="workHours"
              max={10}
              required
            />
          </div>
          <div class="col-md-3">
            <label for="emailId" class="form-label mb-1">
              EMAIL ID
            </label>
            <input
              type="email"
              class="form-control"
              id="emailId"
              onChange={handleInputChange}
              required
            />
          </div>
          {/* <div class="col-md-3">
            <label for="mgrEmail" class="form-label mb-1">
              MANAGER/POC EMAIL ID
            </label>
            <input
              type="email"
              class="form-control"
              id="mgrEmail"
              onChange={handleInputChange}
              required
            />
          </div> */}
        </div>
        <div className="d-flex justify-content-space-evenly shadow-sm rounded row p-3 mt-2 mt-4 w-75 bg-light border border-primary">
          <div class="col-md-4">
            <select
              id="inputYear"
              class="form-select"
              value={selectYear}
              onChange={handleChangeYear}
              required
            >
              <option>Select Year...</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
          </div>
          <div class="col-md-4">
            <select
              id="inputMonth"
              class="form-select"
              value={selectMonth}
              onChange={handleChangeMonth}
              required
            >
              <option>Select Month...</option>
              {months.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>
          </div>
          <div class="col-md-4">
            <button type="submit" class="btn btn-primary">
              Proceed to Enter Timesheet Details
            </button>
          </div>
        </div>
      </form>
      {showTables && (
        <TableComponent
          Month={selectMonth}
          Year={selectYear}
          psidValue={psidValue}
          empName={empName}
          managerName={managerName}
          dateDataState={dateDataState}
          emailId={emailId}
          setShowTables={setShowTables}
          // managerEmail={managerEmail}
        />
      )}
    </div>
  );
}

export default App;
