import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';

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
    },

    getAllMovies: async () => {
        try {
            const result = await Film.find({ label: 'movie' });
            return {
                success: true,
                data: result,
                statusCode: 200
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
                statusCode: 500
            };
        }
    },

    uploadMoviesFromExcel: async (filePath) => {
        try {
            const workbook = XLSX.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const movies = XLSX.utils.sheet_to_json(worksheet);

            const createdFilms = [];

            for (let movie of movies) {
                const { name, description, poster, thumbnail, label, year, episodes, casts } = movie;

                let castIds = [];

                const castEntries = JSON.parse(casts); // mảng các ObjectId dạng chuỗi

                for (let castId of castEntries) {
                    if (!mongoose.Types.ObjectId.isValid(castId)) {
                        throw new Error(`Invalid ObjectId format: ${castId}`);
                    }

                    const existingCast = await Cast.findById(castId);
                    if (!existingCast) {
                        throw new Error(`Cast with id ${castId} does not exist in the database`);
                    }

                    castIds.push(castId);
                }

                const createdFilm = await Film.create({
                    name,
                    description,
                    poster,
                    thumbnail: JSON.parse(thumbnail),
                    label,
                    year,
                    episodes: JSON.parse(episodes),
                    casts: castIds
                });

                createdFilms.push(createdFilm);
            }

            return {
                success: true,
                data: createdFilms,
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
