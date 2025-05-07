import Favorite from '../models/favorite.model.js';


const FavoriteService = {
    createFavorite: async ({ user }) => {
        try {
            const favorite = await Favorite.create({ user });
            return {
                success: true,
                data: favorite,
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

export default FavoriteService;
