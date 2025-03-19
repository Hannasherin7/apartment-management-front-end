import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../Componets/Layoyt/Navbar';

const Visitor = () => {
    const [data, setData] = useState(
        {
            "NameOfVisitor": "",
            "FlatId": "",
            "DateOfArrival": "",
            "TimeOfArrival": "",
            "ReasonForVisit": "",
            "VisitorContact": ""
        }
    )

    const inputHandler = (event) => {
        setData({
            ...data, [event.target.name]:
                event.target.value
        })
    }

    const readValue = () => {
        console.log(data)
        axios.post("https://apartment-management-backend.onrender.com/visitor", data).then(
            (response) => {
                console.log(response)
                if (response.data.status == "success") {
                    alert("success")
                }
                else {
                    alert("Error")
                }
            }
        ).catch()

    }

    const backgroundStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/8082203/pexels-photo-8082203.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        color: 'white',
    };

    const formStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    };

    return (
        <div>
            <Navbar/>
            <div style={backgroundStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3" style={formStyle}>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1 className="display-4 text"><center>Add Visitors</center></h1>
                            </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="text" className="form-label">Name of visitor</label>
                                    <input type="text" className="form-control" name='NameOfVisitor' value={data.NameOfVisitor} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="text" className="form-label">FlatId</label>
                                    <input type="text" className="form-control" name='FlatId' value={data.FlatId} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="date" className="form-label">DateOfArrival</label>
                                <input type="date" className="form-control" name='DateOfArrival' value={data.DateOfArrival} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                                     <label className="form-label">Time of Arrival</label>
//                                     <input type="time" className="form-control" name="TimeOfArrival" value={data.TimeOfArrival} onChange={inputHandler} required />
//                                 </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="text" className="form-label">Reason for visiting</label>
                                    <input type="text" className="form-control" name='ReasonForVisit' value={data.ReasonForVisit} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="text" className="form-label">Contact No</label>
                                    <input type="text" className="form-control" name='VisitorContact' value={data.VisitorContact} onChange={inputHandler} />
                                </div>


                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readValue}>AddVisitor</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Visitor