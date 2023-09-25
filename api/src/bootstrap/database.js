
import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import { Videogame as VideogameModel, Genre as GenreModel, Platform as PlatformModel } from '../models/index.js';


config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
export const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

VideogameModel(database);
GenreModel(database);
PlatformModel(database);

export const { Videogame, Genre, Platform } = database.models;

Videogame.belongsToMany(Genre, { through: 'videogames_genres',timestamps:false });
Genre.belongsToMany(Videogame, { through: 'videogames_genres',timestamps:false });
Videogame.belongsToMany(Platform, { through: 'videogames_platforms',timestamps:false });
Platform.belongsToMany(Videogame, { through: 'videogames_platforms',timestamps:false });


