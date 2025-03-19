import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../Componets/Layoyt/NavbarAdmin';
import axios from 'axios';

const Residents = () => {
    const [data, changeData] = useState([]); // Ensure data is initialized as an array

    const deleteNonResident = (_id) => {
        let input = { "_id": _id };
        axios.post("http://localhost:8088/deleteNonResident", input,
         
        ).then(
            (response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully deleted");
                    changeData(prevData => prevData.filter(resident => resident._id !== _id));
                } else {
                    alert("Error");
                }
            }
        ).catch(error => console.error(error));
    };
    const fetchData = () => {
      axios.get("http://localhost:8088/residents",
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      ).then(
          (response) => {
              console.log("API Response:", response.data);
              if (Array.isArray(response.data) && response.data.length > 0) {
                  changeData(response.data);
              } else {
                  console.error("API returned empty or invalid data.");
                  changeData([]); // Ensure the UI shows "No Residents Found"
              }
          }
      ).catch(
          (error) => {
              console.error("Error fetching data:", error.message);
          }
      );
  };
  
    // Fetch data on component mount
    useEffect(() => { fetchData(); }, []);

    return (
        <div>
            <div className="container">
                <NavbarAdmin />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">FlatId</th>
                                    <th scope="col">ContactNo</th>
                                    <th scope="col">FamilyMembers</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Occupation</th>
                                    <th scope="col">Indate</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(data) && data.length > 0 ? (
                                    data.map((value) => (
                                        <tr key={value._id}>
                                            <td>{value.Name}</td>
                                            <td>{value.FlatId}</td>
                                            <td>{value.ContactNo}</td>
                                            <td>{value.FamilyMembers}</td>
                                            <td>{value.Role}</td>
                                            <td>{value.Occupation}</td>
                                            <td>{value.Indate}</td>
                                            <td>{value.email}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => deleteNonResident(value._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9" className="text-center">No Residents Found</td>
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

export default Residents;
