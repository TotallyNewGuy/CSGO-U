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

// Map.create({
//     title: "Dust2",
//     URL: "https://live.staticflickr.com/65535/51385622296_930d0faff3_h.jpg"
// }, function (error, doc) {
//     if (!error) {
//         console.log('成功')
//         console.log(doc)
//     }
// })
// Map.create({
//     title: "Mirage",
//     URL: "https://live.staticflickr.com/65535/51385869303_d4bb6fb60c_h.jpg"
// }, function (error, doc) {
//     if (!error) {
//         console.log('成功')
//         console.log(doc)
//     }
// })
// Map.create({
//     title: "Inferno",
//     URL: "https://live.staticflickr.com/65535/51384864532_42e2a466ec_h.jpg"
// }, function (error, doc) {
//     if (!error) {
//         console.log('成功')
//         console.log(doc)
//     }
// })

// Utility.create({
//     overAllImage: "https://live.staticflickr.com/65535/51386147621_a72322b320_o_d.jpg",
//     detailImage: ["https://live.staticflickr.com/65535/51386155491_1a10b4d589_c.jpg", "https://live.staticflickr.com/65535/51385397992_15cabacb02_c.jpg"],

//     title: "M-CT-FlashA",
//     description: "Mirage-FlashA-Throw-CT side",

//     type: "Flash",
//     side: "CT",
//     technique: "Throw",
//     map: "Mirage",
// }, function (error, doc) {
//     if (!error) {
//         console.log('成功')
//         console.log(doc)
//     }
// })