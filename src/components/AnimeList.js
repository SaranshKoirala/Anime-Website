import AnimeCard from "./AnimeCard";
import { useAnimeContext } from "../Context/AnimeContext";
import styles from "./AnimeList.module.css";
import NavBar from "./Navbar";

function AnimeList() {
  const { animeArray } = useAnimeContext();
  return (
    <>
      <NavBar />
      <div className={styles.animeList}>
        {animeArray.map((animeObj) => (
          <AnimeCard animeObj={animeObj} key={animeObj.id} />
        ))}
      </div>
    </>
  );
}
export default AnimeList;
