import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../customHook/useAuth";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ showSidebar, setShowSidebar, onClose, imgUrl }) => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  return (
    <div
      className={`sidebar bg-light ${showSidebar ? "show" : ""} shadow`}
      style={{
        width: "250px",
        height: "auto",
        maxHeight: "calc(100vh - 56px)",
        overflowY: "auto",
      }}
    >
      <div className="sidebar-header d-flex align-items-center justify-content-between p-3 border-bottom">
        <button
          className="btn-close btn-light btn-sm"
          onClick={onClose}
        ></button>
        <div className="profile-info text-center">
          <img
            src={imgUrl}
            alt="Profile"
            className="profile-image rounded-circle"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <h5 className="profile-name mt-2 mb-0 text-dark">{user.name}</h5>
        </div>
      </div>
      <ul className="list-unstyled p-3">
        <li className="mb-2">
          <Link
            className="text-decoration-none text-dark d-flex align-items-center"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              navigate("/edit-profile");
            }}
          >
            <i className="bi bi-person-fill me-2"></i>Edit Profile
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/settings"
            className="text-decoration-none text-dark d-flex align-items-center"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <i className="bi bi-gear-fill me-2"></i>Settings
          </Link>
        </li>
        <li className="mb-2">
          <Link
            className="text-decoration-none text-dark d-flex align-items-center"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              navigate("/help");
            }}
          >
            <i className="bi bi-question-circle me-2"></i>
            Help
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/feedback"
            className="text-decoration-none text-dark d-flex align-items-center"
            onClick={(e) => {
              e.preventDefault();
              setShowSidebar(false);
            }}
          >
            <i className="bi bi-envelope-fill me-2"></i>Send Feedback
          </Link>
        </li>
        <li>
          <Link
            className="btn btn-link text-dark d-flex align-items-center"
            onClick={logout}
            to="/"
          >
            <i className="bi bi-box-arrow-right me-2"></i>Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
