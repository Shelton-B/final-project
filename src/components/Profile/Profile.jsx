import "../Profile/profile.css";

function Profile({ handleTrackerClick }) {
  return (
    <div className="profile">
      <div className="profile__page-container">
        <h1 className="profile__text">Add Workout</h1>
        <button
          className="profile__button"
          onClick={handleTrackerClick}
        ></button>
      </div>
    </div>
  );
}

export default Profile;
