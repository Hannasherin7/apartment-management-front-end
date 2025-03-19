import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Navbar from '../../Componets/Layoyt/Navbar';

const Complaints = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        ResidentName: "",
        FlatId: "",
        ComplaintType: "",
        PriorityLevel: "Select",
        DateFilled: "",
        ContactNo: ""
    });

    const [errors, setErrors] = useState({});

    const inputHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!data.ResidentName.trim()) newErrors.ResidentName = "Resident Name is required";
        if (!data.FlatId.trim()) newErrors.FlatId = "Flat Id is required";
        if (!data.ComplaintType.trim()) newErrors.ComplaintType = "Complaint Type is required";
        if (!data.PriorityLevel || data.PriorityLevel === "Select") newErrors.PriorityLevel = "Please select a priority level";
        if (!data.DateFilled) newErrors.DateFilled = "Date is required";
        if (!data.ContactNo.trim()) {
            newErrors.ContactNo = "Contact No is required";
        } else if (!/^\d{10}$/.test(data.ContactNo)) {
            newErrors.ContactNo = "Contact No must be 10 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Submitted Complaint Data:", data);
            axios.post("http://localhost:8088/complaints", data,
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
              })
                .then((response) => {
                    console.log(response);
                    if (response.data.status === "success") {
                        alert("Complaint Submitted Successfully!");
                        setData({
                            ResidentName: "",
                            FlatId: "",
                            ComplaintType: "",
                            PriorityLevel: "Select",
                            DateFilled: "",
                            ContactNo: ""
                        });
                        setErrors({});
                    } else {
                        alert("Error in submission.");
                    }
                })
                .catch((error) => {
                    console.error("Error submitting complaint:", error);
                });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="card p-4 shadow">
                    <h1 className="text-center mb-4">Complaints Form</h1>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Resident Name</label>
                            <input type="text" className="form-control" name="ResidentName" value={data.ResidentName} onChange={inputHandler} />
                            {errors.ResidentName && <span className="text-danger">{errors.ResidentName}</span>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Flat Id</label>
                            <input type="text" className="form-control" name="FlatId" value={data.FlatId} onChange={inputHandler} />
                            {errors.FlatId && <span className="text-danger">{errors.FlatId}</span>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Complaint Type</label>
                            <input type="text" className="form-control" name="ComplaintType" value={data.ComplaintType} onChange={inputHandler} />
                            {errors.ComplaintType && <span className="text-danger">{errors.ComplaintType}</span>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Priority Level</label>
                            <select className="form-select" name="PriorityLevel" value={data.PriorityLevel} onChange={inputHandler}>
                                <option value="Select">Select</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                            {errors.PriorityLevel && <span className="text-danger">{errors.PriorityLevel}</span>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Date Filed</label>
                            <input type="date" className="form-control" name="DateFilled" value={data.DateFilled} onChange={inputHandler} />
                            {errors.DateFilled && <span className="text-danger">{errors.DateFilled}</span>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Contact No</label>
                            <input type="text" className="form-control" name="ContactNo" value={data.ContactNo} onChange={inputHandler} />
                            {errors.ContactNo && <span className="text-danger">{errors.ContactNo}</span>}
                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <button 
                                className="btn btn-purple" 
                                style={{ backgroundColor: 'purple', color: 'white' }} 
                                onClick={() => navigate('/user/complaint')}>
                                View Complaints
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complaints;
