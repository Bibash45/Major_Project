import React, { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import useAuth from "../customHook/useAuth";
import axios from "axios";

const ProfileIcon = () => {
  const { user } = useAuth();

  const [imageSrc, setImageSrc] = useState("");
  const defaultImage =
    "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg";

  const fetchImage = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/users/${user._id}`
      );
      const data = res.data;
      console.log(data);

      // Create a URL for the image blob
      setImageSrc(`http://localhost:5000/${data}`);
    } catch (error) {
      setImageSrc(defaultImage); // Use default image if profile image is not found
    }
  };
  useEffect(() => {
    if (user) {
      fetchImage();
    } else {
      setImageSrc(defaultImage); // Use default image if no profile image is available
    }
  }, [user]);

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  console.log(imageSrc);
  

  return (
    <>
      <div className="profile-icon" onClick={toggleSidebar}>
        <img src={imageSrc} alt="Profile" className="profile-image" />
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
