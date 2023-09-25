import { GET_VIDEOGAMES, GET_VIDEOGAME, GET_GENRES, GET_SORTED_AZ, FILTER_VIDEOGAME, ORDER_BY_DATED, POST_VIDEOGAME, FILTER_BY_GENRE, FILTER_CREATED, ORDER_BY_NAME, ORDER_BY_RATING, GET_PLATFORMS, GET_VIDEOGAME_NAME } from "./action-types";
import { filterByGenre, filterCreated, orderByName, orderByRating, orderByReleaseDate } from './action';

const initialState = {
  videoGames: [],
  videoGame: [],
  sortedVideoGameAZ: [],
  filters: {},
  genres: [],
  platforms: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return { ...state, videoGames: payload };

    case GET_VIDEOGAME:
      return { ...state, videoGame: payload };

    case GET_VIDEOGAME_NAME:
      return { ...state, videoGame: payload };

    case GET_SORTED_AZ:
      return { ...state, sortedVideoGameAZ: payload };

    case FILTER_VIDEOGAME:
      return { ...state, videoGame: payload };

    case POST_VIDEOGAME:
      return { ...state };

    case GET_GENRES:
      return { ...state, genres: payload };

    case GET_PLATFORMS:
      return { ...state, platforms: payload };

    case FILTER_BY_GENRE:
      const genresFiltered = filterByGenre(state.videoGames, payload);
      return {
        ...state,
        videoGames: genresFiltered,
      };

    case FILTER_CREATED:
      const filterCreatedResult = filterCreated(state.videoGames, payload);
      return {
        ...state,
        videoGames: filterCreatedResult,
      };

    case ORDER_BY_NAME:
      const sortNameResult = orderByName(state.videoGames, payload);
      return {
        ...state,
        videoGames: sortNameResult,
      };

    case ORDER_BY_RATING:
      const sortRatingResult = orderByRating(state.videoGames, payload);
      return {
        ...state,
        videoGames: sortRatingResult,
      };

    case ORDER_BY_DATED:
      const sortReleaseDateResult = orderByReleaseDate(state.videoGames, payload);
      return {
        ...state,
        videoGames: sortReleaseDateResult,
      };

    default:
      return state;
  }
};

export default reducer;