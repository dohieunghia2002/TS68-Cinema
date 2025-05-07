import UserSevice from "../services/user.service.js";

// [GET] /user/all
const getAllUser = async (req, res) => {
    const result = await UserSevice.entireUser();
    if (!result.success) {
        return res.status(result.statusCode).json({ error: result.message });
    }
    return res.status(result.statusCode).json(result.data);
}

export default { getAllUser };
