import express from 'express';
import filmController from '../controllers/film.controller.js';

const router = express.Router();

router.post('/create', filmController.createNewFilm);
router.get('/movies/all', filmController.getAllMovies);

export default router;
