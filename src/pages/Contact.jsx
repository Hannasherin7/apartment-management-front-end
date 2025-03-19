import React from 'react'
import Navbar from '../Componets/Layoyt/Navbar';
import './Home.css'; 


const Contact = () => {
  return (
    <div>
        <Navbar></Navbar>
        {/* Contact Section */}
        <section className="contact bg-light py-5">
                <div className="container">
                    <h2 className="text-center text-primary mb-4">Contact Us</h2>
                    <p className="text-center">If you have any questions or need support, feel free to reach out:</p>
                    <ul className="list-unstyled text-center">
                        <li>Email: <a href="mailto:support@apartmentmanage.com">support@apartmentmanage.com</a></li>
                        <li>Phone: +91 9234 567 890</li>
                        <li>Address: 1234 Elm St, Apartment City</li>
                    </ul>
                </div>
            </section>
            {/* Footer */}
            <footer className="footer bg-dark text-white py-3 text-center">
                <p>© 2024 Apartment Management System. All rights reserved.</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/home" className="text-white">Home</a></li>
                    <li className="list-inline-item"><a href="/aboutus" className="text-white">About Us</a></li>
                    
                </ul>
            </footer>
    </div>
  )
}

export default Contact