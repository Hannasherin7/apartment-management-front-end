import React from "react";
import NavbarAdmin from "../Componets/Layoyt/NavbarAdmin";

const AdminHome = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
    };

    const cardStyle = {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        width: "80%",
        maxWidth: "500px",
    };

    const headingStyle = {
        color: "#333",
        marginBottom: "20px",
    };
    
    return (
        <div style={containerStyle}>
            <NavbarAdmin />
            <div style={cardStyle}>
                <h1 style={headingStyle}>Admin Dashboard</h1>
            </div>
        </div>
    );
};

export default AdminHome;
