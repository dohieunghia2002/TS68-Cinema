import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from "../models/user.model.js";
import Favorite from "../models/favorite.model.js";


export const generateAccessoken = async ({ _id, isAdmin }) => {
    return jwt.sign(
        { id: _id, isAdmin: isAdmin },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: '30d' }
    );
}

export const generateRefreshToken = async ({ _id, isAdmin }) => {
    return jwt.sign(
        { id: _id, isAdmin: isAdmin },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: '365d' }
    );
}

const AuthService = {
    signup: async ({ fullname, email, password }) => {
        try {
            const userExist = await User.findOne({ email });

            if (userExist) {
                return {
                    success: false,
                    statusCode: 409,
                    message: 'Email already registered',
                };
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                fullname,
                email,
                password: hashedPassword,
            });

            await newUser.save();
            await Favorite.create({ user: newUser._id, film: [] });

            return {
                success: true,
                message: 'Register successful',
                data: {
                    id: newUser._id,
                    fullname: newUser.fullname,
                    email: newUser.email,
                    avatar: newUser.avatar
                },
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

    signin: async ({ email, password }) => {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return {
                    success: false,
                    message: 'User unregistered',
                    statusCode: 404
                };
            }
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                return {
                    success: false,
                    message: 'Wrong password',
                    statusCode: 401
                };
            }
            const accesstoken = await generateAccessoken({ _id: user._id, isAdmin: user.isAdmin });
            const refreshtoken = await generateRefreshToken({ _id: user._id, isAdmin: user.isAdmin });
            user.refreshtoken = refreshtoken;
            await user.save();
            const userData = {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                avatar: user.avatar,
                isAdmin: user.isAdmin
            }

            return {
                success: true,
                data: {
                    userData,
                    accesstoken
                },
                statusCode: 200
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

export default AuthService;
