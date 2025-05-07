import Film from '../models/film.model.js';
import Cast from '../models/cast.model.js';

const FilmService = {
    createFilm: async ({ name, description, poster, thumbnail, label, year, episodes, casts }) => {
        try {
            for (let i = 0; i < casts.length; i++) {
                if (!casts[i]._id) {
                    const newCast = await Cast.create({ name: casts[i].name });
                    casts[i]._id = newCast._id;
                }
            }
            const film = await Film.create({ name, description, poster, thumbnail, label, year, episodes, casts });
            return {
                success: true,
                data: film,
                statusCode: 201
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
                statusCode: 500
            };
        }
    }
}

export default FilmService;
