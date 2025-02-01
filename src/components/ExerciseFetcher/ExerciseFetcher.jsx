import React, { useState, useEffect } from "react";

// const ExerciseFetcher = () => {
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const url = "https://exercises2.p.rapidapi.com/";
//       const options = {
//         method: "GET",
//         headers: {
//           "x-rapidapi-key":
//             "81e0515c44mshcb0246c9d0a602ap119dbdjsnefdcd1f678b8",
//           "x-rapidapi-host": "exercises2.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result = await response.json();
//         setExercises(result); // Update state with the fetched data
//       } catch (error) {
//         setError(error.message); // Handle errors
//       } finally {
//         setLoading(false); // Set loading to false
//       }
//     };

//     fetchExercises();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Exercises</h1>
//       <ul>
//         {exercises.map((exercise, index) => (
//           <li key={index}>{exercise.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

function ExerciseFetcher() {
  return <div className="exercises"></div>;
}

export default ExerciseFetcher;
