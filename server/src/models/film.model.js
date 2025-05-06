import mongoose from 'mongoose';

var filmSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    poster: { type: String, required: true },
    thumbnail: [{ type: String, required: true }],
    label: { type: String, enum: ['movie', 'tv-series'], required: true },
    year: { type: Number, required: true },
    episodes: [
        {
            videoUrl: { type: String },
            number: { type: Number, default: 1 },
        }
    ],
    casts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cast' }]
}, { collection: 'films' })


const Film = mongoose.model('Film', filmSchema);
export default Film;