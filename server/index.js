import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/posts', postRoutes);

import postRoutes from './routes/posts.js';

const CONNECTION_URL = 'mongodb+srv://gamwthnpanagiasoukaitonxristosou:NM8ruoJ7aots2gJx@cluster0.e3y1m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`O SERVER TREXEI SAN TRELOS ME ${PORT} KM/H`)))
    .catch((error) => console.log(error))