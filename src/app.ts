import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRouter from './routers';
import passport from 'passport';
import './config/passport'; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize()); 

app.use('/api', mainRouter);

app.get('/', (req, res) => {
  res.send('Grand Lodge Web App API');
});

export default app;