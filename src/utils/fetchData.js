export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "81e0515c44mshcb0246c9d0a602ap119dbdjsnefdcd1f678b8",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
