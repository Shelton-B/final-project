import "./TrackerModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function TrackerModal({ handleCloseClick, isOpen, handleSubmit }) {
  const [formData, setFormData] = useState({
    exercise: "",
    sets: "",
    weight: "",
    reps: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ModalWithForm
      title="workout-tracker"
      titleText="Workout Tracker"
      buttonText="Save"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Exercise
        <input
          className="modal__input"
          type="text"
          name="exercise"
          placeholder="Deadlift"
          value={formData.exercise}
          onChange={handleInputChange}
        />
      </label>

      <label className="modal__label">
        Sets
        <input
          className="modal__input"
          type="number"
          name="sets"
          placeholder="5"
          value={formData.sets}
          onChange={handleInputChange}
          min={0}
          max={10}
        />
      </label>
      <div className="modal__label-container">
        <label className="modal__label">
          Weight (lbs)
          <input
            className="modal__input"
            type="number"
            name="weight"
            placeholder="135"
            value={formData.weight}
            onChange={handleInputChange}
            min={0}
            max={1000}
          />
        </label>

        <label className="modal__label">
          Reps
          <input
            className="modal__input"
            type="number"
            name="reps"
            placeholder="5"
            value={formData.reps}
            onChange={handleInputChange}
            min={0}
            max={10}
          />
        </label>
      </div>

      <div className="modal__submit-container">
        <button className="modal__submit" type="submit">
          Save
        </button>
      </div>
    </ModalWithForm>
  );
}
export default TrackerModal;
