import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    login(data);
  };

  const login = async (data) => {
    try {
      const response = await axios.post("https://apartment-management-backend.onrender.com/signin", data);
      if (response.data.status === "Success") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userid", response.data.userid);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("isAdmin", response?.data?.isAdmin || false);

        
        
        alert("LOGGED IN");
        if (response.data?.isAdmin === true) {
          return navigate("/adminhome");
      } else {
          navigate("/home");
      }      
      } else if (response.data.status === "Error") {
        setErrorMessage(response.data.message);
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log(error.message);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  const backgroundStyle = {
    backgroundImage:
      'url("https://watermark.lovepik.com/photo/20211122/large/lovepik-livable-apartment-picture_500745102.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const formStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    maxWidth: "400px",
    width: "100%",
  };

  return (
    <div style={backgroundStyle}>
      <div className="container">
        <div className="row col-12">
          <div className="row g-3" style={formStyle}>
            <div className="col-12">
              <h1 className="display-4 text-center">SIGN IN</h1>
              {errorMessage && (<div
              style={{
                color: "red",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </div>)}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
              </div>
              <div className="col-12">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 characters",
                    },
                  })}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="col-12 d-flex justify-content-center mt-3">
                <button type="submit" className="btn btn-success">
                  Sign In
                </button>
              </div>
            </form>
            <div className="col-12 d-flex justify-content-center mt-3">
              <Link to="/signup" className="btn btn-primary">
                Click here for new user
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
