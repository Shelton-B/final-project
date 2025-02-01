import { Link } from "react-router-dom";
import "../App/app.css";
import "../Header/header.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Header({ handleSignUpClick, handleLogInClick, isLoggedIn }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__text">Solid Foundation</h1>
        <div className="header__button-container">
          {location.pathname !== "/about-us" && (
            <Link to="/about-us">
              <button className="header__button" id="about-us-btn">
                ABOUT US
              </button>
            </Link>
          )}

          {!isLoggedIn && location.pathname === "/" ? (
            <>
              <button onClick={handleSignUpClick} className="header__button">
                SIGN UP
              </button>
              <button onClick={handleLogInClick} className="header__button">
                LOG IN
              </button>
            </>
          ) : (
            <>
              {(location.pathname === "/profile" ||
                location.pathname === "/about-us") && (
                <>
                  <Link to="/">
                    <button className="header__button">HOME</button>
                  </Link>
                  {isLoggedIn && (
                    <button className="header__button">SIGN OUT</button>
                  )}
                </>
              )}

              {(location.pathname === "/about-us" ||
                location.pathname === "/") &&
                isLoggedIn && (
                  <Link to="/profile">
                    <button className="header__button">MY PROFILE</button>
                  </Link>
                )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
