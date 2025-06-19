import FilmService from "../services/film.service.js";

// [POST] /film/create
const createNewFilm = async (req, res) => {
    const { name, description, poster, thumbnail, label, year, episodes, casts } = req.body;
    const result = await FilmService.createFilm({ name, description, poster, thumbnail, label, year, episodes, casts });
    return res.status(result.statusCode).json(result.data);
}

// [GET] /film/movies/all
const getAllMovies = async (req, res) => {
    const result = await FilmService.getAllMovies();
    return res.status(result.statusCode).json(result.data);
}

export default { createNewFilm, getAllMovies };
