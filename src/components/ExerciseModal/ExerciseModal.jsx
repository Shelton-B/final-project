import "./ExerciseModal.css";

function ExerciseModal({ isOpen, exercise, handleCloseClick }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <h2 className="modal__header">{exercise.name}</h2>
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
        <div className="modal__footer">
          <br />
          <h2 className="modal__description">{exercise.instructions}</h2>
        </div>
      </div>
    </div>
  );
}

export default ExerciseModal;
