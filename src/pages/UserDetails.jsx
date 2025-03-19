import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Componets/Layoyt/Navbar";
import axios from "axios";

const UserDetails = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const userprofile = async () => {
    try {
      const response = await axios.post("http://localhost:8088/user/profile", {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setUser(response.data.user); 
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch user details");
      setLoading(false);
    }
  };

  useEffect(() => {
    userprofile();
  }, []);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.pageStyle}>
      <Navbar />
      <div style={styles.profileCard}>
        <div style={styles.avatarContainer}>
          <img
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            alt="User Avatar"
            style={styles.avatar}
          />
        </div>
        <div>
            <center>
          <h2 style={styles.userName}>NAME: {user?.Name }</h2>
          <p style={styles.userInfo}>
            <strong>Email:</strong> {user?.email }</p>
          <p style={styles.userInfo}>
            <strong>Phone No:</strong> {user?.ContactNo }</p>
          <p style={styles.userInfo}>
            <strong>Occupation:</strong> {user?.Occupation}</p>
          <p style={styles.userInfo}>
            <strong>Role:</strong> {user?.Role }</p>
          <p style={styles.userInfo}>
            <strong>User ID:</strong> {user?._id }</p>
            </center>
        </div>
        
      </div>
    </div>
  );
};

const styles = {
  pageStyle: {
    backgroundImage:
      "url('https://t4.ftcdn.net/jpg/08/43/06/75/360_F_843067510_2REgt3QCVylwfkhMDTSztnwSvxrDJvEs.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    padding: "20px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    padding: "20px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  avatarContainer: {
    marginBottom: "20px",
  },
  avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ddd",
  },
  userInfo: {
    textAlign: "center",
    color: "#333",
  },
  userName: {
    fontSize: "24px",
    color: "#333",
    margin: "10px 0",
  },
};

export default UserDetails;
