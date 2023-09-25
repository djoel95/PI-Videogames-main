import axios from 'axios';
import { Genre } from '../../bootstrap/index.js';

const { API_Key, URL } = process.env;
const createGenre = async () => {
  try {
    const response = await axios.get(`${URL}/genres?key=${API_Key}`);
    const data = response.data.results;
    const sortedData = data.sort((a, b) => a.id - b.id); // Ordena los datos por id

    const promises = sortedData.map(async(gen) => {
      return await Genre.findOrCreate({
        where: { id: gen.id , name: gen.name},
      });
    });

    const genres = await Promise.all(promises);
      // const genres = sortedData.map (gen => ({id: gen.id, name: gen.name}));
    console.log(genres);

    return genres

  } catch (error) {
    window.alert(error?.data || 'Ha ocurrido un error');

  }
};

export default createGenre;