import "../SignOutModal/SignOutModal.css";

function SignOutModal({ isOpen, handleCloseClick, handleSignOut }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h1 id="signout-modal-header" className="modal__header">
          SIGNOUT CONFIRMATION
        </h1>
        <h2 className="modal__text">Are you sure you want to sign out?</h2>
        <div className="modal__button-container">
          <button
            id="signout-modal-btn-1"
            className="modal__submit"
            type="button"
            onClick={handleSignOut}
          >
            Yes
          </button>
          <button
            onClick={handleCloseClick}
            id="signout-modal-btn-2"
            className="modal__submit"
            type="button"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignOutModal;
