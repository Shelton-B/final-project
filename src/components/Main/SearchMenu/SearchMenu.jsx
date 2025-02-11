import "../SearchMenu/searchmenu.css";
import React, { useState } from "react";
import { exerciseOptions, fetchData } from "../../../utils/ExerciseDBapi";

function SearchMenu({ setExercises, setLoading }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    if (search) {
      setLoading(true);
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
        placeholder="Type in exercise, equipment type or body part (for example; barbell legs or squat)"
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

// DROP DOWN MENU

// const [isOpen, setIsOpen] = useState(false);

// const [selectedOption, setSelectedOption] = useState("");

// const toggleDropdown = () => {
//   setIsOpen(!isOpen);
// };

// const handleSelect = (e) => {
//   setSelectedOption(e.target);
// };

// const options = [
//   { name: "deadlift" },
//   { name: "squat" },
//   { name: "bench press" },
// ];
// console.log(options);

// <button className="dropdown-button" onClick={toggleDropdown}>
// Exercise
// </button>

// {isOpen && (
// <ul className="dropdown-menu">
//   {options.map((option, index) => (
//     <li
//       key={index}
//       className="dropdown-item"
//       onClick={() => handleSelect(option.name)}
//     >
//       {option.name}
//     </li>
//   ))}
// </ul>
// )}
// {/*
// <button className="dropdown-button" onClick={toggleDropdown}>
// Menu
// </button>
// {isOpen && (
// <ul className="dropdown-menu">
//   <li className="dropdown-item">Option 1</li>
//   <li className="dropdown-item">Option 2</li>
//   <li className="dropdown-item">Option 3</li>
// </ul>
// )} */}
