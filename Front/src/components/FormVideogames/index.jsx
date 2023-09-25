import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./styles.module.css";
import {
  postVideogame,
  getGenre,
  getPlatforms,
} from "../../store/videogame/action";

function validate(input) {
  let errors = {};
  if (!input.name.trim()) {
    errors.name = "Write a name, please";
  }
  if (!input.description.trim()) {
    errors.description = "Write a description, please";
  }
  if (!input.platforms.length) {
    errors.platforms = "Select a platform, please";
  }
  return errors;
}
const FormVideogames = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const [input, setInput] = useState({
    name: "",
    description: "",
    reldate: "",
    rating: "",
    platforms: [],
    genres: [],
    image: "",
  });

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //name se refiere a cada casillero q tiene que llenar, por eso en el form aparece name en todos
    }); // el value son los inputs de arriba que van a ir cambiando de valor a medida q la persona ingrse los datos
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleGenres = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  };
  const handlePlatforms = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    if (Object.keys(errors).length === 0) {
      dispatch(postVideogame(input));
      alert("Videogame created 👌");
      setInput({
        //seteo todo mi input en cero
        name: "",
        image: "",
        description: "",
        released: "",
        rating: "",
        genre: [],
        platform: [],
      });
    } else {
      alert("ERROR: videogames not created 😕");
      return;
    }
    //  history push y llevame al home para ver si está creado el videojuego. Redirige
    history.push("/games");
  };

  const handleDeletePlatform = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((platform) => platform !== platform),
    });
  };
  const handleDeleteGenre = (g) => {
    setInput({
      ...input,
      genres: input.genres.filter((genre) => genre !== g),
    });
  };

  useEffect(() => {
    dispatch(getPlatforms());
    dispatch(getGenre());
  }, [dispatch]);

  return (
    <>
      <div className={style.avgwrapper}>
        <h1 className={style.h1}>Add your own videogame</h1>
        <form className={style.formarea} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.detailsarea}>
            <label>Game Name:</label>
            <input
              placeholder="Game Name"
              onBlur={handleOnChange}
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleOnChange(e)}
            />
            {errors.name && <p className={style.error}> {errors.name} </p>}
          </div>
          <div className={style.detailsarea}>
            <label>Image:</label>
            <input
              placeholder="Image"
              onBlur={handleOnChange}
              type="text"
              name="image"
              value={input.image}
              alt="image"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className={style.msgarea}>
            <label>Description:</label>
            <input
              placeholder="Description"
              onBlur={handleOnChange}
              onChange={handleOnChange}
              type="text"
              name="description"
              value={input.description}
            />
            {errors.description && (
              <p className={style.error}> {errors.description} </p>
            )}
          </div>
          <div className={style.detailsarea}>
            <label>Released:</label>
            <input
              type="data"
              name="released"
              value={input.released}
              placeholder="YYYY-MM-DD"
              onChange={(e) => handleOnChange(e)}
            />
            {errors.reldate && (
              <p className={style.error}> {errors.reldate} </p>
            )}
          </div>
          <div className={style.detailsarea}>
            <label>Rating:</label>
            <input
              onBlur={handleOnChange}
              type="number"
              name="rating"
              value={input.rating}
              placeholder="0 to 5"
              onChange={(e) => handleOnChange(e)}
            />
            {errors.rating && <p className={style.error}> {errors.rating} </p>}
          </div>
          <div>
            <label>Platforms:</label>
            <select onChange={handlePlatforms} onBlur={handleOnChange}>
              {platforms?.map((p) => {
                return <option value={p?.id}>{p?.name}</option>;
              })}
            </select>
            <ul>
              {input.platforms?.map((p) => (
                <li>{p}</li>
              ))}
            </ul>
            {errors.platform && (
              <p className={style.error}> {errors.platform} </p>
            )}
          </div>
          <div>
            <label>Genres:</label>
            <select onChange={handleGenres} onBlur={handleOnChange}>
              {genres?.map((p) => {
                return <option value={p[0]?.id}>{p[0]?.name}</option>;
              })}
            </select>
            <ul>
              {input.genres?.map((p) => (
                <li>{p}</li>
              ))}
            </ul>
            {errors.genres && <p className={style.error}> {errors.genres} </p>}
          </div>
          <button className={style.bot} type={"submit"}>
            Add Game
          </button>
        </form>
      </div>
      <div>
        {input.genres.map((g) => (
          <div className="x_genre_container">
            <label className="x_genre">{g}</label>
            <button
              className="x_genre_buttom"
              onClick={() => handleDeleteGenre(g)}>
              X
            </button>
          </div>
        ))}
        {input.platforms.map((p) => (
          <div className={style.x_platform_container}>
            <label className={style.x_platform}>{p}</label>
            <button
              className={style.x_platform_buttom}
              onClick={() => handleDeletePlatform(p)}>
              X
            </button>
          </div>
        ))}
      </div>
      <div>
        <span>
          <Link to="/games">
            <button className={style.bot2}>Back To Home</button>
          </Link>
        </span>
      </div>
    </>
  );
};

export default FormVideogames;
