import "../Main/main.css";
import SearchMenu from "./SearchMenu/SearchMenu";
import Exercises from "../Exercises/Exercises";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import Pagination from "../Pagination/Pagination";

function Main({ handleCardClick }) {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  //
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const totalPosts = exercises.length;
  //
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentExercises = exercises.slice(indexOfFirstPost, indexOfLastPost);

  const [hasSearched, setHasSearched] = useState(false);

  return (
    <main className="main">
      <SearchMenu
        setExercises={setExercises}
        setLoading={setLoading}
        setHasSearched={setHasSearched}
      />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Exercises
            exercises={currentExercises}
            handleCardClick={handleCardClick}
          />
          {hasSearched && totalPosts === 0 ? (
            <p className="main__text">NO RESULTS</p>
          ) : (
            totalPosts > 0 && (
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={exercises.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )
          )}
        </>
      )}
    </main>
  );
}

export default Main;
