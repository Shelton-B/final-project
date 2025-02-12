import "./ExerciseCard.css";

function ExerciseCard({ exercise, handleCardClick }) {
  const handleClick = () => {
    handleCardClick(exercise);
    console.log(exercise);
  };

  return (
    <li className="exercise__card" onClick={handleClick}>
      <img
        className="exercise__gif"
        src={exercise.gifUrl}
        alt={exercise.name}
      />
      <div className="exercise__card-container"></div>
    </li>
  );
}

export default ExerciseCard;
