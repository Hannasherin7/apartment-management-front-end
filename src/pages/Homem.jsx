import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homem = () => {
    const navigate = useNavigate();

    const backgroundStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/1457846/pexels-photo-1457846.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
    };

    const headerStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 40px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
    };

    const buttonContainerStyle = {
        display: 'flex',
        gap: '10px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        transition: '0.3s',
    };

    const footerStyle = {
        width: '100%',
        padding: '15px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        textAlign: 'center',
        fontSize: '14px',
    };

    return (
        <div style={backgroundStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <h2>Apartment Management</h2>
                <div style={buttonContainerStyle}>
                    <button style={{ ...buttonStyle, backgroundColor: '#007bff', color: 'white' }} onClick={() => navigate('/signup')}>Sign Up</button>
                    <button style={{ ...buttonStyle, backgroundColor: '#28a745', color: 'white' }} onClick={() => navigate('/signin')}>Sign In</button>
                </div>
            </div>

            {/* Main Content */}
            <div>
                <h1>Welcome to Apartment Management</h1>
                <p>Effortlessly manage and track all aspects of your apartment.</p>
            </div>

            {/* Footer */}
            <div style={footerStyle}>
                <p>&copy; {new Date().getFullYear()} Apartment Management System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Homem;
