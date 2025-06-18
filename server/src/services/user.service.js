import User from "../models/user.model.js";


const UserService = {
    entireUser: async () => {
        try {
            const users = await User.find();
            return {
                success: true,
                statusCode: 200,
                data: users
            }
        } catch (error) {
            return {
                success: false,
                message: error.message,
                statusCode: 500
            };
        }
    },

    infoUser: async ({ id }) => {
        try {
            const user = await User.findById(id);
            return {
                success: true,
                statusCode: 200,
                data: user
            }
        } catch (error) {
            return {
                success: false,
                message: error.message,
                statusCode: 500
            };
        }
    }
}

export default UserService;
