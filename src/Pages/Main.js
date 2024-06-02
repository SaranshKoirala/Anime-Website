import styles from "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAnimeContext } from "../Context/AnimeContext";
import { useRef } from "react";

function Main() {
  const { searchQuery, setSearchQuery } = useAnimeContext();
  const inputRef = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    inputRef.current.value = "";
    navigate(`/${searchQuery}`);
  }

  const linkRoute = `${searchQuery ? `/${searchQuery}` : "/"}`;
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navItemContainer}>
          <Link to="/home" className={styles.link}>
            <li>Home</li>
          </Link>
          <Link to="/movies" className={styles.link}>
            <li>Movies</li>
          </Link>
          <Link to="/tvseries" className={styles.link}>
            <li>Tv Series</li>
          </Link>
          <Link to="/mostpopular" className={styles.link}>
            <li>Most Popular</li>
          </Link>
          <Link to="/topairing" className={styles.link}>
            <li>Top Airing</li>
          </Link>
        </ul>
      </nav>
      <div className={styles.searchContainer}>
        <h1>Anime World</h1>
        <div>
          <form onSubmit={handleSubmit} className={styles.inputContainer}>
            <input
              placeholder="Search anime..."
              className={styles.inputField}
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link to={linkRoute}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            </Link>
          </form>
        </div>
        <div className={styles.topSearch}>
          <p>
            Top search: Demon Slayer:Kimetsu no... Solo Leveling, One Piece,
            Wind Breaker, Jujutsu Kaisen 2nd Season, Kaiju No.8, Demon Slayer:
            Kimetsu no...Black Clover, My Hero Academia Season...
          </p>
        </div>
        <Link to="/home">
          <button className={styles.btn}>Watch anime</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
