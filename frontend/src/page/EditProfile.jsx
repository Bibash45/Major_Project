import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../customHook/useAuth";
import { Helmet } from "react-helmet";

const EditProfile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    profileImage: null,
    name: user ? user.name : "",
    email: user ? user.email : "",
    bio: user ? user.bio : "",
  });
  const [imagePreview, setImagePreview] = useState(user ? user.profileImage : "");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      profileImage: file,
    }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("bio", formData.bio);

    // Append the file if available
    if (formData.profileImage) {
      formDataToSend.append("image", formData.profileImage);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/${user._id}`, // Use user._id for API request
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } } // Set the header for file upload
      );
      console.log("Profile updated:", response.data);
      navigate("/"); // Navigate to home or another page on success
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Cleanup blob URL when component unmounts or image changes
  useEffect(() => {
    return () => {
      if (imagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <>
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
              <Form.Control
                type="file"
                id="profileImage"
                label="Upload New Photo"
                onChange={handleImageChange}
              />
            </Form.Group>
          </Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBio" className="mt-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  name="bio"
                  rows={3}
                  placeholder="Tell us about yourself"
                  value={formData.bio}
                  onChange={handleChange}
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
