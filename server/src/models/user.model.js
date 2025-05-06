import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, default: 'https://i.pinimg.com/474x/fe/30/c6/fe30c64eeffd665d0772ad31b554a555.jpg' },
    isAdmin: { type: Boolean, default: false }
}, { collection: 'users' })


const User = mongoose.model('User', userSchema);
export default User;