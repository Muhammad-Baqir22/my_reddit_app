import express from 'express';

import userRouter from './routes/user.routes.js'; 
import authRouter from './routes/auth.router.js'; 
import createpost from './routes/createpost.router.js'
import subreddit from './routes/subreddit.router.js';
import subsfollow from './routes/subsfollow.router.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/createpost',createpost);
app.use('/api/subreddit',subreddit);
app.use('/api/subsfollow',subsfollow);



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
