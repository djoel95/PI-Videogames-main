import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import style from "./styles.module.css";
import TablaPaginacion from "../Paginacion";
import {
  orderByName,
  orderByRating,
  orderByReleaseDate,
  filterByPlatform,
  filterByGenre,
  filterCreated,
  filterVideoGames
} from "../../store/videogame/action";

const Cards = () => {
  const dispatch = useDispatch();
  const videoGames = useSelector((state) => state.videoGames);
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(15);
  const [sort, setSort] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const sortedVideoGames = videoGames.slice().sort((a, b) => {
    if (selectedSort === "asc") {
      return a.name.localeCompare(b.name);
    } else if (selectedSort === "desc") {
      return b.name.localeCompare(a.name);
    } else {
      return 0;
    }
  });

  function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentVideoGames = sortedVideoGames.slice(startIndex, endIndex);

 

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRatingChange = (event) => {
    dispatch(orderByRating(event.target.value));
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);

    if (event.target.value === "rating") {
      dispatch(orderByRating(videoGames, "Desc")); // Cambia 'Desc' por el valor que desees para el orden
    } else if (event.target.value === "name") {
      dispatch(orderByName(videoGames, "Asc")); // Cambia 'Asc' por el valor que desees para el orden
    } else if (event.target.value === "released") {
      dispatch(orderByReleaseDate(videoGames, "Desc")); // Cambia 'Desc' por el valor que desees para el orden
    }
  };
   const handleGenreChange = (event) => {
     dispatch(filterByGenre(videoGames, "Asc"));
   }

  return (
    <>
      <div className={style.ContainerText}>
        <div className={style.header}>
          <div className={style.headerLeft}>
            <div className={style.Container}>
              <h1 className={style.headingSub}>Videogames</h1>
            </div>
            <div className={style.headerRight}></div>
          </div>
        </div>
        <div className={style.gameList}>
          <div className={style.gameListControls}>
            <div className={style.gameListControlsLeft}>
              <div className={style.filterSelects}>
                <div className={style.dropdownSelects}>
                  <div className={style.dropdownSelects__button}>
                    <button className={style.buttonSelect} type="">
                      <div className={style.button__content}>
                        <div className={style.button__title}>
                          Sort by:
                          <span className={style.button__value}>
                            VideoGames
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.gameListControlsRight}>
            <div className={style.modeSelectList}>
              <div className={style.modeSelectTitle}>Filters options:</div>
              <div className={style.modeSelectItems}>
                <div>
                  <div className={style.modeSelectItemActive}></div>
                  <div>
                    <div className={style.modeSelectItemActives}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.gameListControls}>
          <div className={style.gameListControlsLeft}>
            <select value={selectedSort} onChange={handleSortChange}>
              <option value="">Sort by</option>
              <option value="name">Name</option>
              <option value="released">Released</option>
              <option value="rating">Rating</option>
            </select>
            <select
              name="filter"
              value={selectedGenre}
              onChange={handleGenreChange}>
              <option value="">Genre</option>
              {uniqueGenres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>

            <select
              name="filter"
              value={selectedPlatform}
              onChange={handlePlatformChange}>
              <option value="">Platform</option>
              {uniquePlatforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={style.Container}>
          {currentVideoGames.map((videoGame) => (
            <Card
              key={videoGame.id}
              id={videoGame.id}
              image={videoGame.image}
              name={videoGame.name}
              released={videoGame.released}
              rating={videoGame.rating}
              platforms={videoGame.platform}
              genres={videoGame.genre}
            />
          ))}
          <TablaPaginacion
            totalPages={Math.ceil(sortedVideoGames.length / cardsPerPage)}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
