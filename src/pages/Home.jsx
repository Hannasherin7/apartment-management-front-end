import React from 'react';
import Navbar from '../Componets/Layoyt/Navbar';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                {/* Welcome Section */}
                                <section className="home-intro bg-light text-center py-5">
                                    <h1 className="display-4 text-primary"><b>Welcome to Apartment Management System</b></h1>
                                    <p className="lead text-dark">
                                        Manage your apartment with ease.

                                        <i>This System is dedicated to simplifying the daily operations of apartment living.
                                        Our platform enables residents and management to efficiently handle complaints, and monitor visitor access.
                                        We prioritize transparency and communication, fostering a strong sense of community among residents.
                                        Our user-friendly interface ensures that managing everyday activities is seamless and stress-free.
                                        Our team is committed to providing reliable support and resources, ensuring residents feel secure and informed.
                                        By embracing technology, we aim to enhance the living experience for everyone in the community.
                                        Join us in creating a well-organized and thriving apartment environment.</i>
                                    </p>
                                </section>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active ">
                                                    <img src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="Slide 1" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jvdm-1457842.jpg&fm=jpg" className="d-block w-100" alt="Slide 2" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="https://dlifeinteriors.com/wp-content/uploads/2019/06/Actor-jayasuryas-Balcony-Makeover-for-Home-in-Kochi-by-DLIFE-Home-Interiors-kochi-1024x683-1.jpg" className="d-block w-100" alt="Slide 3" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                {/* Footer */}
                                <footer className="footer bg-dark text-white py-3 text-center">
                                    <p>© 2024 Apartment Management System. All rights reserved.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a href="/aboutus" className="text-white">About Us</a></li>
                                        <li className="list-inline-item"><a href="/contact" className="text-white">Contact</a></li>
                                    </ul>
                                </footer>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
