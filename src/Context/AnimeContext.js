import { createContext, useState, useEffect, useContext } from "react";

const AnimeContext = createContext();

function AnimeContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [animeArray, setAnimeArray] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      if (!searchQuery) return;
      try {
        const res = await fetch(
          `https://kitsu.io/api/edge/anime?filter[text]=${searchQuery}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setAnimeArray(data.data);
      } catch (error) {
        console.error("There was an error while fetching data!");
      }
    }
    fetchData();
    return function () {
      // setSearchQuery("");
      controller.abort();
    };
  }, [searchQuery]);
  return (
    <AnimeContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        animeArray,
        setAnimeArray,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

function useAnimeContext() {
  const context = useContext(AnimeContext);
  if (context === undefined)
    throw new Error("Value of AnimeContext is out of Scope!");
  return context;
}

export { AnimeContextProvider, useAnimeContext };
