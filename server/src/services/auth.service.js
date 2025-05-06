import User from "../models/user.model.js";
import bcrypt from 'bcrypt'

const AuthService = {
    signup: async ({ fullname, email, password }) => {
        console.log(fullname, email, password);
        const userExist = await User.findOne({ email });

        if (userExist) {
            throw new Error('Email already registered');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return {
            id: newUser._id,
            fullname: newUser.fullname,
            email: newUser.email,
            avatar: newUser.avatar
        };
    }
}

export default AuthService;
