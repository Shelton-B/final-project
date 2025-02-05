import "./ExerciseCard.css";

function ExerciseCard({ exercise, handleCardClick }) {
  const handleClick = () => {
    handleCardClick(exercise);
  };

  return (
    <div className="exercise__card" onClick={handleClick}>
      <img
        className="exercise__gif"
        src={exercise.gifUrl}
        alt={exercise.name}
      />
      <div className="exercise__card-container">
        <h3 className="exercise__name">{exercise.target}</h3>
        <h3 id="bodypart" className="exercise__name">
          {exercise.bodyPart}
        </h3>
      </div>
    </div>
  );
}

export default ExerciseCard;
