import React from 'react';
import './Home.css'; 
import Navbar from '../Componets/Layoyt/Navbar';


const AboutUs = () => {
    return (
        <div>
            
            <Navbar></Navbar>

            {/* Features Overview */}
            <section className="features bg-white py-5">
                <div className="container">
                    <h2 className="text-center text-primary mb-4" style={{ fontSize: '2.5rem' }}>Our Features</h2>
                    <div className="row">
                        <div className="col-md-3 feature-item text-center">
                            <h3 className="text-warning">Bill Management</h3>
                            <p>Track your utility and maintenance bills easily.</p>
                        </div>
                        <div className="col-md-3 feature-item text-center">
                            <h3 className="text-warning">Complaint Handling</h3>
                            <p>Log and monitor complaints efficiently.</p>
                        </div>
                        <div className="col-md-3 feature-item text-center">
                            <h3 className="text-warning">Visitor Tracking</h3>
                            <p>Keep a record of all visitors and manage permissions.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about bg-secondary text-white py-5">
                <div className="container">
                    <h2 className="text-center mb-4">About Us</h2>
                    <p className="text-center">
                        Our Apartment Management System is designed to simplify community living, providing all members with the tools to manage day-to-day operations effectively.
                    </p>
                    <p className="text-center">
                        We aim to foster a well-organized, transparent, and secure environment for all residents and stakeholders.
                    </p>
                </div>
            </section>

            

            {/* Community News and Updates */}
            <section className="updates bg-white py-5">
                <div className="container">
                    <h2 className="text-center text-primary mb-4">Latest News & Updates</h2>
                    <ul className="list-unstyled text-center">
                        <li>New visitor management policy to be implemented from November 1st.</li>
                        <li>Annual meeting scheduled for December 10th at 5 PM.</li>
                    </ul>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="events bg-primary py-5">
                <div className="container">
                    <h2 className="text-center text-white mb-4">Upcoming Events</h2>
                    <ul className="list-unstyled text-center">
                        <li>Community Cleanup Day – October 25th</li>
                        <li>Monthly Maintenance Meeting – November 5th</li>
                    </ul>
                </div>
            </section>

           

            {/* Testimonials Section */}
            <section className="testimonials bg-white py-5">
                <div className="container">
                    <h2 className="text-center text-primary mb-4">What Our Residents Say</h2>
                    <blockquote className="blockquote text-center">
                        <p>"The Apartment Management System has made bill payments so much easier! I no longer worry about missing deadlines."</p>
                        <footer className="blockquote-footer">John Doe, Resident</footer>
                    </blockquote>
                    <blockquote className="blockquote text-center">
                        <p>"Tracking visitors and ensuring security has never been this simple. Great job!"</p>
                        <footer className="blockquote-footer">Jane Smith, Resident</footer>
                    </blockquote>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer bg-dark text-white py-3 text-center">
                <p>© 2024 Apartment Management System. All rights reserved.</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/home" className="text-white">Home</a></li>
                    <li className="list-inline-item"><a href="/contact" className="text-white">Contact</a></li>
                    
                </ul>
            </footer>
        </div>
    );
};

export default AboutUs;
