import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import SignUpModal from "../SignUpModal/SignUpModal";
import LogInModal from "../LogInModal/LogInModal";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AboutUs from "../AboutUs/AboutUs";
import ExerciseModal from "../ExerciseModal/ExerciseModal";
import SignOutModal from "../SignOutModal/SignOutModal";
import Navigation from "../Navigation/Navigation";
import TrackerModal from "../TrackerModal/TrackerModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const [user, setCurrentUser] = useState("");

  const navigate = useNavigate();

  const closeModal = () => {
    setActiveModal("");
  };

  const handleSignUpClick = () => {
    setActiveModal("sign-up");
  };

  const handleLogInClick = () => {
    setActiveModal("log-in");
  };

  const handleCardClick = (exercise) => {
    setActiveModal("exercise-card");
    setSelectedCard(exercise);
  };

  const handleSignOutClick = () => {
    setActiveModal("sign-out");
  };

  const handleTrackerClick = () => {
    setActiveModal("workout-tracker");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    closeModal();
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser("");
    closeModal();
    navigate("/");
  };

  return (
    <div className="page">
      <Header></Header>

      <Navigation
        isLoggedIn={isLoggedIn}
        handleSignUpClick={handleSignUpClick}
        handleLogInClick={handleLogInClick}
        handleSignOutClick={handleSignOutClick}
      ></Navigation>

      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={<Main handleCardClick={handleCardClick} />}
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile handleTrackerClick={handleTrackerClick} />
              </ProtectedRoute>
            }
          />

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
      </div>

      <Footer />

      <SignUpModal
        isOpen={activeModal === "sign-up"}
        handleCloseClick={closeModal}
        handleLogInClick={handleLogInClick}
        handleSubmit={handleSubmit}
      />

      <LogInModal
        isOpen={activeModal === "log-in"}
        handleCloseClick={closeModal}
        handleSignUpClick={handleSignUpClick}
        handleSubmit={handleSubmit}
      />

      <ExerciseModal
        isOpen={activeModal === "exercise-card"}
        exercise={selectedCard}
        handleCloseClick={closeModal}
      ></ExerciseModal>

      <SignOutModal
        isOpen={activeModal === "sign-out"}
        handleCloseClick={closeModal}
        handleSignOut={handleSignOut}
      ></SignOutModal>

      <TrackerModal
        isOpen={activeModal === "workout-tracker"}
        handleCloseClick={closeModal}
        handleSubmit={handleSubmit}
      ></TrackerModal>
    </div>
  );
}

export default App;
