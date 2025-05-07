import jwt from 'jsonwebtoken';


const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        const accesstoken = await token.split(' ')[1];
        jwt.verify(accesstoken, process.env.JWT_ACCESS_KEY, (err, user) => {
            if (err) {
                return res.status(403).json('token is not valid');
            }

            req.user = user;
            next();
        });
    } else {
        return res.status(403).json('You are not authenticated');
    }
}

const verifyTokenAdmin = async (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else return res.status(405).json('You are not allow');
    });

}

export default { verifyToken, verifyTokenAdmin };
