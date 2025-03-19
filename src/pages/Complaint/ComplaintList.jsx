import React, { useState, useEffect } from "react";
import NavbarAdmin from "../../Componets/Layoyt/NavbarAdmin";
import axios from "axios";

const ComplaintList = () => {
  const [data, changeData] = useState([]);

  // Fetch complaints when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://apartment-management-backend.onrender.com/complaintList", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log("Fetched Data:", response.data);
        changeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching complaints:", error);
      });
  };

  const deleteComplaint = (_id) => {
    axios
      .post("https://apartment-management-backend.onrender.com/deleteComplaint", { _id })
      .then((response) => {
        if (response.data.status === "success") {
          alert("Complaint cleared");
          changeData((prevData) => prevData.filter((res) => res._id !== _id));
        } else {
          alert("Error deleting complaint");
        }
      })
      .catch((error) => {
        console.error("Error deleting complaint:", error);
      });
  };

  // Update complaint status
  const updateStatus = (_id, newStatus) => {
    axios
      .post("https://apartment-management-backend.onrender.com/updateComplaintStatus", { _id, status: newStatus })
      .then((response) => {
        if (response.data.status === "success") {
          changeData((prevData) =>
            prevData.map((item) =>
              item._id === _id ? { ...item, status: newStatus } : item
            )
          );
          console.log("Status updated successfully!");
        } else {
          alert("Error updating status");
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <div>
      <div className="container">
        <NavbarAdmin />
        <div className="row">
          <div className="col">
            <h2 className="text-center mt-4">Complaint List</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Resident Name</th>
                  <th>Flat ID</th>
                  <th>Complaint Type</th>
                  <th>Priority Level</th>
                  <th>Date Filled</th>
                  <th>Contact No</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((value) => (
                    <tr key={value._id}>
                      <td>{value.ResidentName}</td>
                      <td>{value.FlatId}</td>
                      <td>{value.ComplaintType}</td>
                      <td>{value.PriorityLevel}</td>
                      <td>{value.DateFilled}</td>
                      <td>{value.ContactNo}</td>
                      <td>
                        <select
                          className="form-select"
                          value={value.status}
                          onChange={(e) => updateStatus(value._id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteComplaint(value._id)}
                        >
                          Clear Complaint
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center text-muted">
                      No complaints available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintList;
