import React, { useState, useEffect } from "react";
import { Form, Stack, Container } from "react-bootstrap";
import "../css/personalInfo.css";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <Container>
      <Container id="personalInfoContainer">
        <Stack className="d-flex align-items-center" id="piHeading">
          <div>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <Form className="personalInfo" action="/" method="post">
              <Form.Group className="piSections">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  placeholder="  e.g. Stephen King"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="piSections">
                <Form.Label htmlFor="email">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="  e.g. stephenking@lorem.com"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="piSections">
                <Form.Label htmlFor="phone">Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  id="phone"
                  placeholder="  e.g. +1 234 567 890"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </div>
        </Stack>
      </Container>
    </Container>
  );
}

export default PersonalInfo;
