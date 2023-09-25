import React, { useState, useRef } from "react";
import style from "./styles.module.css";
import logo from "../../assets/Logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [shouldFocus, setShouldFocus] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();


  const onsearch = async (searchValue) => {
    try {
      if (searchValue.trim() === "") {
        // Validar que el campo de búsqueda no esté vacío
        return;
      }
  
      const { data } = await axios.get(`http://localhost:3001/videogames?name=${searchValue}`);
      // (`${VIDEOGAME_API_URL}?name=${searchValue}`);
      setSearchResults(data);

    } catch (error) {

      window.alert(error?.data || "Ha ocurrido un error");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShouldFocus(true);
      onsearch(searchValue); // Realizar la búsqueda cuando se presione Enter
    }
  };

  const handleSearchByName = (event) => {
    setSearchValue(event.target.value);
    setShowResults(true);
  };
 
  const handleToGame = (id) => {
    setShowResults(true);
    navigate(`/games/${id}`);
  };
  return (
<>
    <div className={style.header}>
      <div className={style.searchLogo}>
        <Link to="/games">
          <img className={style.logo} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={style.searchBar}>
        <input
          type="search"
          onChange={handleSearchByName}
          value={searchValue}
          placeholder="Type to Search..."
          className={style.input}
          onKeyDown={handleKeyDown}
          ref={inputRef} // Add the ref to the input element
        />
    {showResults && searchResults.length > 0 && (
            <div className={style.resultsContainer}>
              <ul className={style.resultsList}>
                {searchResults.map((videogame, index) => (
                  <li
                    key={videogame.id}
                    className={style.resultItem}
                    onClick={() => handleToGame(videogame.id)}
                  >
                    <img
                      src={videogame.image}
                      alt={videogame.name} // Agregar atributo alt a las imágenes
                      className={style.flagImage}
                    />
                    <span className={style.countryName}>{videogame.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button className={style.button} onClick={handleToGame}>
            Search by Name
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;