import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";
import React from "react";

function Navigation({
  handleSignUpClick,
  handleLogInClick,
  isLoggedIn,
  handleSignOutClick,
}) {
  return (
    <div className="navigation__container">
      <div className="navigation__button-container">
        {location.pathname !== "/about-us" && (
          <Link to="/about-us">
            <button className="navigation__button" id="about-us-btn">
              ABOUT US
            </button>
          </Link>
        )}

        {!isLoggedIn && location.pathname === "/" ? (
          <>
            <button onClick={handleSignUpClick} className="navigation__button">
              SIGN UP
            </button>
            <button onClick={handleLogInClick} className="navigation__button">
              LOG IN
            </button>
          </>
        ) : (
          <>
            {(location.pathname === "/profile" ||
              location.pathname === "/about-us") && (
              <Link to="/">
                <button className="navigation__button">HOME</button>
              </Link>
            )}

            {(location.pathname === "/about-us" || location.pathname === "/") &&
              isLoggedIn && (
                <Link to="/profile">
                  <button className="navigation__button">MY PROFILE</button>
                </Link>
              )}

            {isLoggedIn && (
              <button
                onClick={handleSignOutClick}
                className="navigation__button"
              >
                SIGN OUT
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Navigation;
