import axios from "axios";
import {
  GET_VIDEOGAME,
  GET_VIDEOGAMES,
  GET_SORTED_AZ,
  GET_GENRES,
  GET_PAGINATE_CHARACTER,
  GET_PLATFORMS,
  GET_VIDEOGAME_NAME,
  FILTER_VIDEOGAMES,
} from "./action-types";
import { FetchService, actionObject } from "../../utils";
import { VIDEOGAME_API_URL, URL } from "../../utils/path";

// Función para traer todos los videoGames
export const getAllVideogames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(VIDEOGAME_API_URL);
      return dispatch({ type: GET_VIDEOGAMES, payload: data });
    } catch (error) {
      window.alert(error?.data || "Ha ocurrido un error");
    }
  };
};

// Función para traer videoGames por su id
export const getVideogame = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${VIDEOGAME_API_URL}${id}`);
      if (data.name) return dispatch({ type: GET_VIDEOGAME, payload: data });
      window.alert("No se encontró el videojuego");
    } catch (error) {
      window.alert(error?.data || "Ha ocurrido un error");
    }
  };
};

// Función para traer videoGames por su Name
export const getVideogameName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${VIDEOGAME_API_URL}/${name}`);
      if (data.name) return dispatch(actionObject(GET_VIDEOGAME_NAME, data));
      window.alert("No se encontró el videojuego");
    } catch (error) {
      window.alert(error?.data || "Ha ocurrido un error");
    }
  };
};
// Función para ordernar todos los videoGames
export const getVideogamesSorted = () => {
  return async (dispatch) => {
    const apiData = await axios.get(`${VIDEOGAME_API_URL}`);
    const videoGames = apiData.data;
    const sortedVideoGameAZ = videoGames.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    dispatch({ type: GET_SORTED_AZ, payload: sortedVideoGameAZ });
  };
};
// Función para paginado
export const getPaginateCharacters = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `${VIDEOGAME_API_URL}character?page=${page}`
      );
      return dispatch(actionObject(GET_PAGINATE_CHARACTER, response?.data));
    } catch (error) {
      window.alert(error?.data || "Ha ocurrido un error");
    }
  };
};
// Función para crear un videoGame
export const postVideogame = async (payload) => {
  try {
    const response = await axios.post(`${VIDEOGAME_API_URL}`, payload);
    return response.data;
  } catch (error) {
    window.alert(error.response.data || "Error posting videogame");
    throw error;
  }
};

// Función para traer todos los Platforms
export const getPlatforms = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}platforms`);
      const platforms = data.data;
      dispatch({ type: GET_PLATFORMS, payload: platforms });
    } catch (error) {
      /*  window.alert(error.response || "Ha ocurrido un error"); */
    }
  };
};

// Función para traer todos los Genres
export const getGenre = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}genres`);
      console.log(data);
      const genres = data.data;
      dispatch({ type: GET_GENRES, payload: genres });
    } catch (error) {
      console.log(error);
      /*  window.alert(error.genres || "Ha ocurrido un error"); */
    }
  };
};
// Función para ordenar por Platform
export const filterByPlatform = (videoGames, platform) => {
  const allGames = videoGames;
  const platformsFiltered =
    platform === "All"
      ? allGames
      : allGames.filter((el) => {
          return el.platforms.find((el) => {
            return el.name === platform;
          });
        });
  return platformsFiltered;
};

// Función para ordenar por Genre
export const filterByGenre = (videoGames, genre) => {
  const allGames = videoGames;
  const genresFiltered =
    genre === "All"
      ? allGames
      : allGames.filter((el) => {
          return el.genres.find((el) => {
            return el.name === genre;
          });
        });
  return genresFiltered;
};

// Función para filtrar por creado o no creado
export const filterCreated = (videoGames, created) => {
  const filterCreated =
    created === "Created"
      ? videoGames.filter((el) => el.createdInDb)
      : videoGames.filter((el) => !el.createdInDb);
  return filterCreated;
};

// Función para ordenar por nombre siendo "a" el primero
export const orderByName = (videoGames, order) => {
  const sortName =
    order === "Asc"
      ? videoGames.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        )
      : videoGames.sort((a, b) =>
          b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        );

  return sortName.filter((videoGame) =>
    videoGame.name.toLowerCase().startsWith("a")
  );
};

// Función para ordenar por rating
export const orderByRating = (videoGames, order) => {
  const sortRating =
    order === "Desc"
      ? videoGames.sort((a, b) => b.rating - a.rating)
      : videoGames.sort((a, b) => a.rating - b.rating);

  return sortRating;
};
// Función para ordenar por Released
export const orderByReleaseDate = (videoGames, order) => {
  const sortReleaseDate =
    order === "Desc"
      ? videoGames.sort((a, b) => new Date(b.released) - new Date(a.released))
      : videoGames.sort((a, b) => new Date(a.released) - new Date(b.released));

  return sortReleaseDate.filter(
    (videoGame) => new Date(videoGame.released) <= new Date()
  );
};

// action.js

export const filterVideoGames = (payload) => {
  return {
    type: FILTER_VIDEOGAMES,
    payload: payload,
  };
};
