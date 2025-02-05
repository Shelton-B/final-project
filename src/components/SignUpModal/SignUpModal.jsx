import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({
  isOpen,
  handleCloseClick,
  handleLogInClick,
  handleSubmit,
}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ModalWithForm
      title="sign-up"
      titleText="Sign Up"
      buttonText="Sign Up"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>

      <div className="modal__submit-container">
        <button className="modal__submit" type="submit">
          Sign Up
        </button>
        <button
          className="modal__submit-2"
          type="button"
          onClick={handleLogInClick}
        >
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
}

export default SignUpModal;
