import AuthService from "../services/auth.service.js";

// [POST] /auth/signup
const signup = async (req, res) => {
    const { fullname, email, password } = req.body;
    const result = await AuthService.signup({ fullname, email, password });

    if (!result.success) {
        return res.status(result.statusCode).json({ error: result.message });
    }

    return res.status(result.statusCode).json(result.data);
}

// [POST] /auth/signin
const signin = async (req, res) => {
    const { email, password } = req.body;

    const result = await AuthService.signin({ email, password });

    if (!result.success) {
        return res.status(result.statusCode).json({ error: result.message });
    }

    return res.status(result.statusCode).json(result.data);
}

export default { signup, signin };