const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: false
}))


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

 // API Geonames
const baseURL_Geonames = 'http://api.geonames.org/searchJSON?q';
const GeoUser = process.env.Geonames_username;

 // POST Route
app.post('/geodata', async function(req, res) {
    const userCity = encodeURI(req.body.city);
    console.log(`City to used for GeoData: ${userCity}`);
    
    const apiGeoData = `${baseURL_Geonames}=${userCity}&maxRows=1&username=${GeoUser}`;
    console.log(apiGeoData);
    const response_GeoAPI = await fetch(apiGeoData);
    const GeoToJSON = await response_GeoAPI.json();
    res.send(GeoToJSON);
})

// designates what port the app will listen to for incoming requests
app.listen(8085, function () {
    console.log('Example app listening on port 8085!');
    console.log(`Your API key is ${process.env.API_KEY}`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})
