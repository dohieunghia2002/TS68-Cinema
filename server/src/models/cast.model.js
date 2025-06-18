import mongoose from "mongoose";

var castSchema = new mongoose.Schema({
    name: { type: String, required: true },
    avatar: { type: String, default: 'https://i.pinimg.com/474x/fe/30/c6/fe30c64eeffd665d0772ad31b554a555.jpg' }
}, { collection: 'casts' })

const Cast = mongoose.model('Cast', castSchema);
export default Cast;

