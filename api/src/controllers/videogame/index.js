import { Op } from 'sequelize';
import { Videogame, Genre, Platform } from '../../bootstrap/index.js';
import axios from 'axios';
import { config } from 'dotenv';


config();

const { API_Key, URL } = process.env;

// Controller post videogame.
// Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
const createVideoGame = async (name, description, image, released, rating, genres, platforms) => {
    const found = await Videogame.findOne({ where: { name } });
    
    if (found) {
       throw new Error("Ya existe un videojuego con ese nombre");
    }
    if (!name || !description || !platforms || !image || !released || !rating || !genres) {
        throw new Error("Todos los campos son obligatorios");
    }
    if (genres.length === 0) {
        throw new Error("Debe seleccionar al menos un género");
    }
    if (platforms.length === 0) {
        throw new Error("Debe seleccionar al menos una plataforma");
    }
    console.log(platforms);
    const newGenresExist = await Genre.findAll({ where: { id: genres } });
    const newPlatformsExist = await Platform.findByPk(platforms);


    const videogame = await Videogame.create({ name, description, image, released, rating });

    await videogame.addGenres(newGenresExist);
    await videogame.addPlatforms(newPlatformsExist);

    const newVideogame = await Videogame.findByPk(videogame.id, {
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    });

    return newVideogame;
};

// controller get videogame by id.
// ! PENDIENTES Tiene que incluir los datos del género del videojuego al que está asociado.
const getVideogameById = async (id, source) => {
    let response;

    if (source === "api") {
        response = await axios.get(`${URL}/games/${id}?key=${API_Key}`);
    } else {
        response = await Videogame.findByPk(id);
    }

    if (source === "api") {
        const { data } = response;
        const { id, name, description, released, platforms, background_image, background_image_additional, rating, genres } = data;
        const platformsName = platforms.map(data => data.platform.name).join(", ");
         const genresName = genres.map(data => data.name).join(", ");
        return { id, name, description, platforms:platformsName, released, background_image, rating, genres:genresName, };
    }

    return response;
};

/* Imagen.
Rating.
Géneros. */
// controller get all games.

const getAllGames = async () => {
    const pageSize = 15; // Number of games to retrieve per page
    const totalPages = Math.ceil(105 / pageSize); // Total number of pages required to retrieve 1000 games

    let allGames = [];

    for (let page = 1; page <= totalPages; page++) {
        const response = await axios.get(`${URL}/games?key=${API_Key}&page_size=${pageSize}&page=${page}`);
        const games = response.data.results;
        allGames = allGames.concat(games);
    }
    const allGameClean = cleanArray(allGames);
    const dbVideogames = await Videogame.findAll({
        include: {
            model: Genre, 
            atributes: ['name'], 
            through: {
            attributes: [],
        },
    }});

    const results = [...dbVideogames, ...allGameClean];


    return results;
};
const cleanArray = (arr) => {
    return arr.map(({ id, name, description, platforms, parent_platforms, background_image, background_image_additional, released, rating, genres }) => {
        const uniquePlatforms = [...new Set([...platforms, ...parent_platforms].flatMap(p => p.platform.name))];
        const genreIDs = genres.map(g => g.name );
        return {
            id,
            name,
            description,
            platform: uniquePlatforms,
            image: background_image,
            image2: background_image_additional,
            released,
            rating,
            genre: genreIDs,
            created: false
        };
    });
};

// &page_size=40
// controller get games by name.
const getVideogameByName = async (name) => {
    // Buscar videojuegos en la base de datos
    const dbVideogames = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        limit: 15
    });

    // Buscar videojuegos en la API
    const response = await axios.get(`${URL}/games?search=${name}&key=${API_Key}&pageSize=15`);
    const apiVideogamesRaw = response.data.results;

    // Limpiar y filtrar los resultados de la API
    const apiVideogames = cleanArray(apiVideogamesRaw);
    const filteredApi = apiVideogames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));

    // Combinar los videojuegos de la base de datos y de la API
    const result = [...dbVideogames, ...filteredApi];

    if (result.length === 0) {
        return { message: `No se encontró ningún videojuego que coincida con: '${name}'.` };
    }

    return result.slice(0, 15);
};





export {
    createVideoGame,
    getVideogameById,
    getAllGames,
    getVideogameByName
};

