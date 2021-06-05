let path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// This will allow us to use environment variables we set in a new file
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('dist_prod'));

console.log(__dirname);

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

app.get('/', function (req, res) {
    res.send(mockAPIResponse);
});

// const fetch = require('node-fetch');
const axios = require('axios');

// geonames api
let geonamesBaseURL = 'http://api.geonames.org/searchJSON?';
let geonamesKey = '&username=' + process.env.GEONAMES_USERNAME;
let geonamesParam = '&style=medium&featureClass=P';

app.get('/getGeonamesData', async function (req, res) {
    try {
        const response = await axios.get(geonamesBaseURL +
            'name_startsWith='+ req.query.input +'&name_equals='+ req.query.input + geonamesParam + geonamesKey);
        res.send(response.data);
    } catch (error) {
        console.error(error);
    }
});

// node-fetch implementation
// app.get('/getGeonamesData', async function (req, res) {
//     await fetch(geonamesBaseURL +
//         'name_startsWith='+ req.query.input +'&name_equals='+ req.query.input + geonamesParam + geonamesKey)
//         .then(response => response.json())
//         .then(data => {
//             res.send(data)})
//         .catch(error => console.log('error', error));
// });

// pixabay api
let pixabayBaseURL = 'https://pixabay.com/api/?';
let pixabayKey = 'key=' + process.env.PIXABAY_API_KEY;
let pixabayParam = '&image_type=photo&q=';

app.get('/getPixaBayData', async function (req, res) {
    try {
        const response = await axios.get(pixabayBaseURL + pixabayKey + pixabayParam + encodeURIComponent(req.query.input));
        res.send(response.data);
    } catch (error) {
        console.error(error);
    }
});

// node-fetch implementation
// app.get('/getPixaBayData', async function (req, res) {
//     await fetch(pixabayBaseURL + pixabayKey + pixabayParam + encodeURIComponent(req.query.input))
//         .then(response => response.json())
//         .then(data => {
//             res.send(data)})
//         .catch(error => console.log('error', error));
// });

// weatherbit api
let weatherbitBaseURL = 'https://api.weatherbit.io/v2.0/current?';
let weatherbitKey = 'key=' + process.env.WEATHERBIT_API_KEY;

app.get('/getWeatherbitData', async function (req, res) {
    try {
        const response = await axios.get(weatherbitBaseURL + weatherbitKey + '&lat=' + req.query.lat + '&lon=' + req.query.lon);
        res.send(response.data.data);
    } catch (error) {
        console.error(error);
    }
});

// node-fetch implementation
// app.get('/getWeatherbitData', async function (req, res) {
//     await fetch(weatherbitBaseURL + weatherbitKey + '&lat=' + req.query.lat + '&lon=' + req.query.lon)
//         .then(response => response.json())
//         .then(data => {
//             res.send(data.data)})
//         .catch(error => console.log('error', error));
// });

module.exports = app;