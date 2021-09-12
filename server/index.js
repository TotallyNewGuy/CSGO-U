import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import MyRouter from './routes/MyRouter.js';
import Map from './models/Map.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from CSGO-U!')
})

// three maps on index page
app.get('/maps', async (req, res) => {
    try {
        const maps = await Map.find();
        res.status(200).json(maps);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
})

app.use('/utilities', MyRouter);

// const MY_URL = 'mongodb://localhost:27017/myApp'
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port : ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(`Connection is failed!!! ${error.message}`);
    })

mongoose.set('useFindAndModify', false);
