import AuthService from "../services/auth.service.js";

// [POST] /auth/signup
const signup = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        const newUser = await AuthService.signup({ fullname, email, password });
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

export default { signup };