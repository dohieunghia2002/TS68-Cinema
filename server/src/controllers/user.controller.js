import UserService from "../services/user.service.js";

// [GET] /user/all
const getAllUser = async (req, res) => {
    const result = await UserService.entireUser();
    if (!result.success) {
        return res.status(result.statusCode).json({ error: result.message });
    }
    return res.status(result.statusCode).json(result.data);
}

// [GET] /user/:id
const getInfoUser = async (req, res) => {
    const id = req.params.id;
    const result = await UserService.infoUser({ id });
    if (!result.success) {
        return res.status(result.statusCode).json({ error: result.message });
    }
    return res.status(result.statusCode).json(result.data);
}

export default { getAllUser, getInfoUser };
