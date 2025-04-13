import "../SearchMenu/searchmenu.css";
import React, { useState } from "react";
import { exerciseOptions, fetchData } from "../../../utils/ExerciseDBapi";

function SearchMenu({ setExercises, setLoading, setHasSearched }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    if (search) {
      setLoading(true);
      setHasSearched(true);

      fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0",
        exerciseOptions
      )
        .then((exerciseData) => {
          console.log(exerciseData);
          setLoading(false);

          const searchedExercises = exerciseData.filter(
            (exercise) =>
              exercise.name.toLowerCase().includes(search) ||
              exercise.target.toLowerCase().includes(search) ||
              exercise.equipment.toLowerCase().includes(search) ||
              exercise.bodyPart.toLowerCase().includes(search)
          );
          setSearch("");
          setExercises(searchedExercises);
        })

        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };

  const searchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="search__container">
      <input
        type="text"
        name="searchbar"
        value={search}
        placeholder="Search by exercise name, equipment type, muscle group or body part"
        onChange={handleChange}
        className="searchbar"
        minLength="1"
        maxLength="50"
        onKeyDown={searchKeyDown}
      />
      <button className="search__icon" onClick={handleSearch}></button>
    </div>
  );
}

export default SearchMenu;
