{
  tableData.length && (
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
          {tableData.length &&
            tableData.map((data) => (
              <tr
                className={
                  data.status === "Present"
                    ? "bg-light"
                    : data.status === "Weekend"
                    ? "bg-info"
                    : data.status === "Leave"
                    ? "bg-danger"
                    : data.status === "Half Day"
                    ? "bg-warning"
                    : data.status === "Customer/Public Holiday"
                    ? "bg-secondary"
                    : "bg-success"
                }
                key={data.date}
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
                    <option>Weekend</option>
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
      <form
        ref={form}
        class="col g-3 ms-2 me-auto mb-2 w-75"
        onSubmit={sendEmail}
      >
        <div className="shadow-sm rounded row ms-auto me-auto mt-10 p-3 bg-light border border-primary ">
          <div class="col-md-4">
            <label for="gdMgr" class="form-label mb-1">
              Guardian Manager
            </label>
            <input
              type="text"
              class="form-control mb-2"
              name="gdMgr"
              value={managerName}
            />
          </div>
          <div class="col-md-4">
            <label for="empName" class="form-label mb-1">
              ITC Employee Name
            </label>
            <input
              type="text"
              class="form-control"
              name="empName"
              value={empName}
            />
          </div>
          <div class="col-md-4">
            <label for="empId" class="form-label mb-1">
              Employee Id
            </label>
            <input
              type="number"
              class="form-control"
              name="empId"
              value={psidValue}
            />
          </div>
          <div class="col-md-4">
            <label for="monthTs" class="form-label mb-1">
              Month(MMM,YYYY)
            </label>
            <input
              type="text"
              class="form-control"
              name="monthTs"
              value={monthYear}
            />
          </div>
          <div class="col-md-4">
            <label for="daysPresent" class="form-label mb-1">
              No. of Days Present
            </label>
            <input
              type="number"
              class="form-control"
              name="daysPresent"
              value={countDays.noDaysPresent}
            />
          </div>
          <div class="col-md-4">
            <label for="daysLeave" class="form-label mb-1">
              No. of Days Leaves
            </label>
            <input
              type="number"
              class="form-control"
              name="daysLeave"
              value={countDays.noDaysLeave}
            />
          </div>
          <div class="col-md-4">
            <label for="daysHoliday" class="form-label mb-1">
              Public Holiday/Customer Holiday
            </label>
            <input
              type="number"
              class="form-control"
              name="daysHoliday"
              value={countDays.noOfHolidays}
            />
          </div>
          <div class="col-md-4">
            <label for="lvDate" class="form-label mb-1">
              Leave Dates(DD-MMM)
            </label>
            <input
              type="text"
              class="form-control"
              name="lvDate"
              value={countDays.daysOfLeave}
            />
          </div>
          <div class="col-md-4">
            <label for="userEmail" class="form-label mb-1">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              name="userEmail"
              value={emailId}
            />
          </div>
          {/* <div class="col-md-4">
        <label for="mgrEmail" class="form-label mb-1">
          Manager/POC Email
        </label>
        <input
          type="text"
          class="form-control"
          name="mgrEmail"
          value={managerEmail}
        />
      </div> */}
          <div class="col-md-4">
            <label for="remarks" class="form-label mb-1">
              Remarks
            </label>
            <input type="text" class="form-control" name="remarks" />
          </div>
        </div>
        <div class="col-md-4 mt-2">
          <button type="submit" class="btn btn-primary">
            Submit Timesheet
          </button>
        </div>
      </form>
    </>
  );
}
