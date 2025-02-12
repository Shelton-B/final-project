import "..//ModalWithForm/ModalWithForm.css";
import { useEffect } from "react";

function ModalWithForm({
  children,
  titleText,
  isOpen,
  handleCloseClick,
  onSubmit,
}) {
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseClick();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, handleCloseClick]);

  return (
    <div
      className={`modal ${isOpen && "modal_opened"}`}
      onClick={handleCloseClick}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h1 className="modal__title">{titleText}</h1>

        <button
          className="modal__close"
          type="button"
          onClick={handleCloseClick}
        ></button>

        <form onSubmit={onSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
