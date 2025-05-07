import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './src/config/db.js';

import authRouter from './src/routes/auth.route.js';
import userRouter from './src/routes/user.route.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

connectDB();

const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/auth', authRouter);
app.use('/user', userRouter);



app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})