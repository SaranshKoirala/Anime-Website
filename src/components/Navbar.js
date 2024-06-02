import { useAnimeContext } from "../Context/AnimeContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faComments,
  faPodcast,
  faSearch,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faReddit,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

function NavBar() {
  const { searchQuery, setSearchQuery } = useAnimeContext();
  const inputRef = useRef();
  const navigate = useNavigate();
  const linkRoute = `${searchQuery ? `/${searchQuery}` : ""}`;

  function handleSubmit(e) {
    e.preventDefault();
    inputRef.current.value = "";
    navigate(`/${searchQuery}`);
  }

  return (
    <div className={styles.navContainer}>
      <button className={styles.menuBtn}>
        <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
      </button>
      <div className={styles.logo}>
        <Link to="/" className={styles.heading}>
          <h2>Anime World</h2>
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search anime..."
            ref={inputRef}
            className={styles.searchBar}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link to={linkRoute}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          </Link>
        </form>
      </div>
      <Socials />
      <HeaderSettings />
      <Link to="/login">
        <button className={styles.loginBtn}>Login</button>
      </Link>
    </div>
  );
}

function Socials() {
  return (
    <div className={styles.socials}>
      <FontAwesomeIcon icon={faFacebook} className={styles.socialIcons} />
      <FontAwesomeIcon icon={faDiscord} className={styles.socialIcons} />
      <FontAwesomeIcon icon={faTelegram} className={styles.socialIcons} />
      <FontAwesomeIcon icon={faReddit} className={styles.socialIcons} />
    </div>
  );
}

function HeaderSettings() {
  return (
    <div className={styles.headerSetting}>
      <div className={styles.headerComponents}>
        <FontAwesomeIcon icon={faPodcast} className={styles.headerIcons} />
        <p>Watch2gether</p>
      </div>
      <div className={styles.headerComponents}>
        <FontAwesomeIcon icon={faShuffle} className={styles.headerIcons} />
        <p>Random</p>
      </div>
      <div className={styles.headerComponents}>
        <FontAwesomeIcon icon={faComments} className={styles.headerIcons} />
        <p>Community</p>
      </div>
    </div>
  );
}

export default NavBar;
