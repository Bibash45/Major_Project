import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { isAuth } from "../help/helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const EditProfile = () => {
  console.log(isAuth());

  const [imagePreview, setImagePreview] = useState("");
  const [profileImage, setProfileImage] = useState(null); // Handle file directly in state
  const [formData, setFormData] = useState({
    name: isAuth().name,
    email: isAuth().email,
    bio: isAuth().bio || '',
  });
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file); // Set the selected file
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Show image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send only updated fields
    const dataToSend = new FormData();
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("bio", formData.bio);

    // Only append the profile image if a new one has been selected
    if (profileImage) {
      dataToSend.append("profileImage", profileImage);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/${isAuth()._id}`,
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Profile updated:", response.data);
      toast.success("Updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error.response?.data || error);
      toast.error("Error updating profile"); // Optionally show error toast
    }
  };

  const userData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/${isAuth()._id}`
      );
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Error fetching user data");
    }
  };

  useEffect(() => {
    userData();
  }, []);
  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Profile - DonateFood</title>
        <link
          rel="shortcut icon"
          href="/images/logo.png"
          type="image/x-icon"
          sizes="64x64"
        />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container className="py-4">
        <Row>
          <Col md={4} className="text-center">
            <Form.Group>
              <Form.Label>Profile Picture</Form.Label>
              <div className="profile-image-container">
                <img
                  src={imagePreview || "/images/default-profile.png"}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          </Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>

              <Form.Group controlId="formBio" className="mt-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about yourself"
                />
              </Form.Group>

              <div className="mt-4 text-center">
                <Button
                  variant="secondary"
                  className="me-2"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
                <Button variant="success" type="submit">
                  Save Changes
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditProfile;
