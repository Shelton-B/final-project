import "../Main/main.css";
import SearchMenu from "./SearchMenu/SearchMenu";
import Exercises from "../Exercises/Exercises";
import { useState } from "react";

function Main({ handleCardClick }) {
  const [exercises, setExercises] = useState([]);

  return (
    <main className="main">
      <SearchMenu setExercises={setExercises} />
      <Exercises exercises={exercises} handleCardClick={handleCardClick} />
    </main>
  );
}

export default Main;
