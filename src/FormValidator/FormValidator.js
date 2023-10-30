import React, { useState } from "react";

const FormValidator = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name === "") {
      newErrors.name = "Name is required";
    }
    if (formData.email === "") {
      newErrors.email = "Email is required";
    }
    if (formData.password === "") {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form is valid");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidator;
