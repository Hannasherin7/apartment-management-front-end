import axios from "axios";
import React, { useState } from "react";
import NavbarAdmin from "../Componets/Layoyt/NavbarAdmin";

const Announcement = () => {
    const [input, setInput] = useState({
        message: ""
    });
    
    const InputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const readValues = () => {
        if (!input.message.trim()) {
            alert("Announcement message cannot be empty.");
            return;
        }

        axios.post("http://localhost:8088/create", input, {
            headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
            console.log("Response:", response.data);
            alert("Announcement Posted Successfully");
            setInput({ message: "" }); 
        })
        .catch((error) => {
            console.error("Error:", error.message);
            alert(`Error: ${error.message}`);
        });
    };

    return (
        <div>
            <NavbarAdmin />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card p-4 shadow-lg">
                            <h4 className="mb-3 text-center">Create an Announcement</h4>
                            <textarea 
                                name="message" 
                                value={input.message} 
                                className="form-control mb-3" 
                                onChange={InputHandler}
                                placeholder="Enter your announcement here..."
                            />
                            <button onClick={readValues} className="btn btn-primary w-100">POST</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Announcement;
