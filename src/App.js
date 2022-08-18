import React, { useState } from "react";
import TableComponent from "./components/TableComponent";
import { months } from "./staticData";
import "./App.css";

function App() {
  const [showTables, setShowTables] = useState(false);
  const [psidValue, setPsidValue] = useState();
  const [empName, setEmpName] = useState();
  const [managerName, setManagerName] = useState();
  const [selectYear, setSelectYear] = useState();
  const [selectMonth, setSelectMonth] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTables(true);
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
      <form class="col g-3 ms-2 me-auto mb-2 w-75" onSubmit={handleSubmit}>
        <div className="shadow-sm rounded row ms-auto me-auto mt-10 p-3 bg-light border border-primary ">
          <div class="col-md-4">
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
          <div class="col-md-4">
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
          <div class="col-md-4">
            <label for="doj" class="form-label mb-1">
              DATE OF JOINING
            </label>
            <input type="date" class="form-control" id="doj" required />
          </div>
          <div class="col-md-4">
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
          <div class="col-md-4">
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
          <div class="col-md-4">
            <label for="workHours" class="form-label mb-1">
              TOTAL WORKING HOURS IN A DAY
            </label>
            <input type="number" class="form-control" id="workHours" required />
          </div>
        </div>
        <div className="shadow-sm rounded row ms-auto me-auto mt-2 p-3 mt-4 bg-light border border-primary">
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
                <option>{month}</option>
              ))}
            </select>
          </div>
          <div class="col-md-4">
            <button type="submit" class="btn btn-primary">
              Proceed to Enter Timesheet
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
        />
      )}
    </div>
  );
}

export default App;
