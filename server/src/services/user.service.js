import User from "../models/user.model.js";


const UserSevice = {
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
    }
}

export default UserSevice;
