import React, { useState, useEffect } from "react";
import NavbarAdmin from "../../Componets/Layoyt/NavbarAdmin";
import axios from "axios";
import Navbar from "../../Componets/Layoyt/Navbar";

const OwnComplaint = () => {
  const [complaints, setComplaints] = useState([]);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://apartment-management-backend.onrender.com/ownComplaint", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log("Fetched Data:", response.data); 
        setUser(response.data.user); 
        setComplaints(response.data.complaints); 
      })
      .catch((error) => {
        console.error("Error fetching complaints:", error);
      });
  };

  return (
    <div className="container">
      <Navbar/>
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
                <th>Date Filed</th>
                <th>Contact No</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.length > 0 ? (
                complaints.map((comp) => (
                  <tr key={comp._id}>
                    <td>{comp.ResidentName}</td>
                    <td>{comp.FlatId}</td>
                    <td>{comp.ComplaintType}</td>
                    <td>{comp.PriorityLevel}</td>
                    <td>{comp.DateFilled}</td>
                    <td>{comp.ContactNo}</td>
                    <td>{comp.status }</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    No complaints available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnComplaint;
