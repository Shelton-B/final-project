import React from "react";
import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import ExerciseFetcher from "../ExerciseFetcher/ExerciseFetcher";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import SignUpModal from "../SignUpModal/SignUpModal";
import LogInModal from "../LogInModal/LogInModal";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AboutUs from "../AboutUs/AboutUs";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const navigate = useNavigate();

  const closeModal = () => {
    setActiveModal("");
  };
  const handleSignUpClick = () => {
    setActiveModal("sign-up");
  };

  const handleLogInClick = () => {
    setActiveModal("log-in");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          isLoggedIn={isLoggedIn}
          handleSignUpClick={handleSignUpClick}
          handleLogInClick={handleLogInClick}
        ></Header>

        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile className="profile__background" />
              </ProtectedRoute>
            }
          />
          {/* <ExerciseFetcher /> */}

          <Route path="/about-us" element={<AboutUs />} />

          <Route
            path="*"
            element={
              isLoggedIn ? (
                <Navigate to="/profile" replace />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>

        <Footer />
      </div>

      <SignUpModal
        isOpen={activeModal === "sign-up"}
        handleCloseClick={closeModal}
        handleLogInClick={handleLogInClick}
      />

      <LogInModal
        isOpen={activeModal === "log-in"}
        handleCloseClick={closeModal}
        handleSignUpClick={handleSignUpClick}
      />
    </div>
  );
}

export default App;
