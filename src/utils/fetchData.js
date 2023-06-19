export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ef93ca0e2bmsh3aedd3ec0420558p115638jsn25c5d563a178",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  params: {
    id: "UCE_M8A5yxnLfW0KghEeajjw",
  },
  headers: {
    "X-RapidAPI-Key": "ef93ca0e2bmsh3aedd3ec0420558p115638jsn25c5d563a178",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

// url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",

// url: "https://youtube-search-and-download.p.rapidapi.com/channel/about",
