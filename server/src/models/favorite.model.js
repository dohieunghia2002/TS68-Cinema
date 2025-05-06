import mongoose from "mongoose";

var favoriteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    film: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Film' }]
})

const Favorite = mongoose.model('Favorite', favoriteSchema);
export default Favorite;
