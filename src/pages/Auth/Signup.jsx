import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Signup = () => {
    let navigate = useNavigate();

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      readValue(data);
    };
  
    const readValue = (data) => {
      if (data.password !== data.cpassword) {
        alert("Passwords do not match");
        return;
      }
  
      axios
        .post("https://apartment-management-backend.onrender.com/signup", data)
        .then((response) => {
          if (response.data.status === "SIGNUP") {
            alert("Registration successful");
            navigate("/signin");
          } else {
            alert("Registration failed");
          }
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
        });
    };

    return (
        <div className="signup-container">
            <div className="form-box">
                <h2 className="text-center">SIGN UP</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" {...register("Name", { required: "Name is required" })} />
                            <small className="text-danger">{errors.Name?.message}</small>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Flat ID</label>
                            <input type="text" className="form-control" {...register("FlatId", { required: "Flat ID is required" })} />
                            <small className="text-danger">{errors.FlatId?.message}</small>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Contact No</label>
                            <input type="text" className="form-control" {...register("ContactNo", { required: "Contact number is required", pattern: { value: /^\d{10}$/, message: "Must be 10 digits" } })} />
                            <small className="text-danger">{errors.ContactNo?.message}</small>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Family Members</label>
                            <input type="number" className="form-control" {...register("FamilyMembers", { required: "Enter a valid number" })} />
                            <small className="text-danger">{errors.FamilyMembers?.message}</small>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select className="form-control" {...register("Role", { required: "Role is required" })}>
                                <option value="">Select</option>
                                <option value="Resident">Resident</option>
                                <option value="Tenant">Tenant</option>
                            </select>
                            <small className="text-danger">{errors.Role?.message}</small>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Occupation</label>
                            <input type="text" className="form-control" {...register("Occupation", { required: "Occupation is required" })} />
                            <small className="text-danger">{errors.Occupation?.message}</small>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Indate</label>
                            <input type="date" className="form-control" {...register("Indate", { required: "Indate is required" })} />
                            <small className="text-danger">{errors.Indate?.message}</small>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" {...register("email", { required: "Email is required" })} />
                            <small className="text-danger">{errors.email?.message}</small>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" {...register("password", { required: "Password is required" })} />
                            <small className="text-danger">{errors.password?.message}</small>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Confirm Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                {...register("cpassword", { 
                                    required: "Confirm your password", 
                                    validate: value => value === watch("password") || "Passwords must match" 
                                })} 
                            />
                            <small className="text-danger">{errors.cpassword?.message}</small>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-success w-50">Sign Up</button>
                        </div>
                        <div className="col-12 text-center">
                            <Link to="/signin" className="btn btn-primary w-50">Sign In</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
