import "./Exercises.css";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

function Exercises({ exercises, handleCardClick }) {
  return (
    <div className="exercise">
      <ul className="exercise__container">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            handleCardClick={handleCardClick}
          ></ExerciseCard>
        ))}
      </ul>
    </div>
  );
}

export default Exercises;
