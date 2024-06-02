import { useNavigate } from "react-router-dom";
import styles from "./AnimeCard.module.css";
import { useAnimeContext } from "../Context/AnimeContext";

function AnimeCard({ animeObj }) {
  const animeDescription = animeObj.attributes.description;
  const subtype = animeObj.attributes.subtype;
  const navigate = useNavigate();
  const { searchQuery } = useAnimeContext();

  function handleDetails() {
    navigate(`/${searchQuery}/${animeObj.id}`);
  }

  return (
    <>
      {animeObj && (
        <div className={styles.animeCard} onClick={handleDetails}>
          <img
            src={animeObj.attributes.posterImage.small}
            className={styles.animeImg}
            alt="poster"
          />
          {/* <FontAwesomeIcon icon={faPlay} className="playBtn" /> */}
          <div className="anime-title">
            {animeObj.attributes.canonicalTitle}
          </div>
          <p>{animeDescription.slice(0, 120)}...</p>
          <div className={styles.duration}>
            <p>
              {subtype[0].toUpperCase()}
              {subtype.slice(1)}
            </p>
            <p>.</p>
            <p>{animeObj.attributes.episodeLength}m</p>
          </div>
        </div>
      )}
    </>
  );
}

export default AnimeCard;
