import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from "../../Componets/Layoyt/NavbarAdmin";

const ViewVisitors = () => {
  const [data, changeData] = useState([]);  // Ensure data is initialized as an array
  const [searchTerm, setSearchTerm] = useState("");

  const RejectVisitor = (_id) => {
    let input = { "_id": _id };
    axios.post("http://localhost:8088/rejectVisitor", input).then(
      (response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Rejected");
          changeData(prevData => prevData.filter(visitor => visitor._id !== _id));
        } else {
          alert("Error");
        }
      }
    ).catch((error) => {
      console.error(error.message);
    });
  };

  const fetchData = () => {
    axios.get("http://localhost:8088/viewVisitors",
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    ).then(
      (response) => {
        if (Array.isArray(response.data)) {
          changeData(response.data);
        } else {
          console.error("API response is not an array:", response.data);
          changeData([]); // Set empty array if response is not valid
        }
      }
    ).catch(
      (error) => {
        console.log(error.message);
        changeData([]); // Set empty array on error
      }
    );
  };

  // Search logic
  const filteredUser = Array.isArray(data) ? data.filter((visitor) => {
    return (
      (visitor.NameOfVisitor?.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (String(visitor.FlatId)?.toLowerCase().includes(searchTerm.toLowerCase())) ||  
      (String(visitor.DateOfArrival)?.toLowerCase().includes(searchTerm.toLowerCase()))  
    );
  }) : [];

  // Fetch data on component mount
  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <div className="container">
        <NavbarAdmin />
        <div className="row">
          
          {/* Search Bar */}
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by name of visitor, flatId or date of visit"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="col col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NameOfVisitor</th>
                  <th scope="col">FlatId</th>
                  <th scope="col">DateOfArrival</th>
                  <th scope="col">TimeOfArrival</th>
                  <th scope="col">ReasonForVisit</th>
                  <th scope="col">VisitorContact</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUser.length > 0 ? (
                  filteredUser.map((value, index) => (
                    <tr key={index}>
                      <td>{value.NameOfVisitor}</td>
                      <td>{value.FlatId}</td>
                      <td>{value.DateOfArrival}</td>
                      <td>{value.TimeOfArrival}</td>
                      <td>{value.ReasonForVisit}</td>
                      <td>{value.VisitorContact}</td>
                      <td>
                        <button className="btn btn-danger" onClick={() => RejectVisitor(value._id)}>Reject</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">No Visitors Found</td>
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

export default ViewVisitors;
