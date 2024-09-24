import React, { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import axios from "axios";
import { isAuth } from "../help/helpers";

const ProfileIcon = () => {
  const [imageSrc, setImageSrc] = useState("");
  
  // Default image if no profile image is available
  const defaultImage = "images/profile.jpg";

  // Function to fetch user data and profile image
  const getUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/${isAuth()._id}`
      );
      
      let fullPath = response.data.profileImage;

      // Handle if profileImage is missing or not valid
      if (!fullPath) {
        setImageSrc(defaultImage);
      } else {
        // Remove "public/" from the path
        let relativePath = fullPath.replace(/^public[\\\/]/, '');
        
        // Set the image source to the correct URL
        setImageSrc(`http://localhost:5000/${relativePath}`);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setImageSrc(defaultImage); // Fallback to default image on error
    }
  };

  // Fetch user data when component mounts
  useEffect(() => {
    getUserData();
  }, []);

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <div className="profile-icon" onClick={toggleSidebar}>
        <img src={imageSrc || defaultImage} alt="Profile" className="profile-image"
        title="profile" />
      </div>
      <Sidebar
        showSidebar={showSidebar}
        onClose={closeSidebar}
        setShowSidebar={setShowSidebar}
        imgUrl={imageSrc}
      />
    </>
  );
};

export default ProfileIcon;
