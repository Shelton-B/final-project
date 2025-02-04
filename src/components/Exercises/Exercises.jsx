import "./Exercises.css";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

function Exercises({ exercises, handleCardClick }) {
  return (
    <div className="exercise">
      <div className="exercise__container">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            handleCardClick={handleCardClick}
          ></ExerciseCard>
        ))}
      </div>
    </div>
  );
}

export default Exercises;
