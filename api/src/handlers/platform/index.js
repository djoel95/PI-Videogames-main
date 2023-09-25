import fetchAndCreatePlatforms  from '../../controllers/platform/index.js';

export const getPlatformsHandler = async (req, res) => {
  try {
    const newPlatform = await fetchAndCreatePlatforms();

    res.status(201).json({
      success: true,
      message: 'Platforms cargados exitosamente en la base de datos',
      data: newPlatform
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};