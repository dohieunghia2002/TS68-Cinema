import mongoose from "mongoose";

var castSchema = new mongoose.Schema({
    name: { type: String, required: true },
    avatar: { type: String }
}, { collection: 'casts' })

const Cast = mongoose.model('Cast', castSchema);
export default Cast;

