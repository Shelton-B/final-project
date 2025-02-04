import "./ExerciseModal.css";

function ExerciseModal({ isOpen, card, handleCloseClick }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          className="modal__close"
          type="button"
          onClick={handleCloseClick}
        ></button>
        <img className="modal__image" src={card.gifUrl} alt={card.name}></img>
        <div className="modal__footer">
          <h2 className="modal__caption"> Exercise Name: {card.name}</h2>
          <br />

          <h2 className="modal__caption"> Instructions: {card.instructions}</h2>
        </div>
      </div>
    </div>
  );
}

export default ExerciseModal;
