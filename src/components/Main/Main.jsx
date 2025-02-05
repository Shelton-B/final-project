import "../Main/main.css";
import SearchMenu from "./SearchMenu/SearchMenu";
import Exercises from "../Exercises/Exercises";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";

function Main() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <main className="main">
      <SearchMenu setExercises={setExercises} setLoading={setLoading} />
      {loading ? <Preloader /> : <Exercises exercises={exercises} />}
    </main>
  );
}

export default Main;
