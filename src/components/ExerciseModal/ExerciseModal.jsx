import "./ExerciseModal.css";
import { useEffect } from "react";

function ExerciseModal({ isOpen, exercise, handleCloseClick }) {
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
      <div
        className="modal__content modal__content_type_image"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="modal__header">{exercise.name}</h1>
        <button
          className="modal__close"
          id="exercise-card"
          type="button"
          onClick={handleCloseClick}
        ></button>
        <img
          className="modal__image"
          src={exercise.gifUrl}
          alt={exercise.name}
        ></img>
        <div className="exercise__card-container">
          <h3 id="bodypart" className="exercise__name">
            {exercise.bodyPart}
          </h3>
          <h3 className="exercise__name">
            {exercise.target}, {exercise.secondaryMuscles?.join(", ")}
          </h3>
        </div>

        <div className="modal__footer">
          <br />
          <h2 className="modal__description">{exercise.instructions}</h2>
        </div>
      </div>
    </div>
  );
}

export default ExerciseModal;
