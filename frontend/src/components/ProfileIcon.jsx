import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Sidebar from './SideBar';
import useAuth from '../customHook/useAuth';

const ProfileIcon = () => {
  const {user} = useAuth();
  const imageSrc = user.profileImage;
  const defaultImage = 'https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg'
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
        {<img
            src={imageSrc || defaultImage}
            alt="Profile"
            className="profile-image"
          /> }
        
      </div>
      <Sidebar showSidebar={showSidebar} onClose={closeSidebar} setShowSidebar={setShowSidebar} imgUrl={imageSrc || defaultImage} />
    </>
  );
};

export default ProfileIcon;
