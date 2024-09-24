import  { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; 

const Reset = () => {
  const params = useParams();

  const [value, setValue] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset password",
  });

  useEffect(() => {
    const token = params.token;
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setValue((prevValue) => ({
          ...prevValue,
          name: decoded.name || "User",
          token,
        }));
      } catch (error) {
        console.error("Token decoding error:", error);
        toast.error("Invalid or expired token");
      }
    }
  }, [params.token]);

  const { name, newPassword, buttonText } = value;

  const handleChange = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      newPassword: e.target.value,
    }));
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValue({ ...value, buttonText: "Submitting" });

    axios({
      method: "PUT",
      url: `http://localhost:5000/api/reset-password`,
      data: { newPassword, resetPasswordLink: value.token },
    })
      .then((response) => {
        toast.success(response.data.message);
        setValue({ ...value, buttonText: "Done" });
      })
      .catch((err) => {
        console.log("RESET PASSWORD ERROR", err.response.data);
        setValue({ ...value, buttonText: "Reset password" });
        toast.error(err.response.data.error);
      });
  };

  const passwordResetForm = () => (
    <form className="mt-4">
      <div className="form-group mb-3">
        <label htmlFor="newPassword" className="text-muted">
          New Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="newPassword"
          name="newPassword"
          placeholder="Enter new password"
          value={newPassword}
          onChange={handleChange}
          required
        />
      </div>

      <button className="btn btn-success btn-block" onClick={clickSubmit}>
        {buttonText}
      </button>
    </form>
  );
  return (
    <div className="container mt-5" style={{marginBottom:"162px",paddingTop:"50px"}}>
      <ToastContainer />
      <h1 className="text-center text-muted pb-3">Hey {name}, Set Your New Password</h1>
      <div className="card p-4 shadow">
        {passwordResetForm()}
      </div>
    </div>
  );
};

export default Reset;
