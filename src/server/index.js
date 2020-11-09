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

//------------------------------------------------------------------------
//POST to the Geonames Server API
//------------------------------------------------------------------------

// API Geonames URL
const baseURL_Geonames = 'http://api.geonames.org/searchJSON?q';
// API Geonames username form .env - Geonames_username
const geoUser = process.env.Geonames_username;

 // POST Route /geodata
app.post('/geodata', async function(req, res) {
    const userCity = encodeURI(req.body.city);
    console.log(`City to used for GeoData: ${userCity}`);
    
    const apiGeoData = `${baseURL_Geonames}=${userCity}&maxRows=1&username=${geoUser}`;
    console.log(apiGeoData);
    const response_GeoAPI = await fetch(apiGeoData);
    const GeoToJSON = await response_GeoAPI.json();
    res.send(GeoToJSON);
})

//------------------------------------------------------------------------
//POST to the Weatherbit Server API
//------------------------------------------------------------------------

// API Weatherbit URL
const baseURL_Weatherbit = 'https://api.weatherbit.io/v2.0/forecast/daily';
// API Weatherbit KEY .env - Weatherbit_KEY
const weatherbit_KEY = process.env.Weatherbit_KEY;

 // POST Route /weatherdata
app.post('/weatherdata', async function(req, res) {
    
    latitude = req.body.lat;
    longitude = req.body.lng;

    console.log(`City GeoKoordinates, Latitude: ${latitude} - Longitude: ${longitude}`);
    
    const apiWeatherData = `${baseURL_Weatherbit}?&lat=${latitude}&lon=${longitude}&key=${weatherbit_KEY}`;
    console.log(apiWeatherData);
    const response_WeatherAPI = await fetch(apiWeatherData);
    const WeatherToJSON = await response_WeatherAPI.json();
    res.send(WeatherToJSON);
})

//------------------------------------------------------------------------
//POST to the Pixabay Server API
//------------------------------------------------------------------------

// API Pixabay URL
const baseURL_Pixabay = 'https://pixabay.com/api/';
// API Pixabay KEY .env - Pixabay_KEY
const Pixabay_KEY = process.env.Pixabay_KEY;

 // POST Route /pictures
app.post('/pictures', async function(req, res) {
    
    city = req.body.city;
    country = req.body.country;
    console.log(`City: ${city}, Country: ${country}`);
    
    const apiPicturesCity = `${baseURL_Pixabay}?key=${Pixabay_KEY}&q=${city}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`;
    const apiPicturesCountry = `${baseURL_Pixabay}?key=${Pixabay_KEY}&q=${country}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`;
        
    const response_PicturesAPI = await fetch(apiPicturesCity);
    const PicturesCityToJSON = await response_PicturesAPI.json();

    // Checking if there are pictures of the city avaiable, if not switching to the country the city is in
    if (PicturesCityToJSON.totalHits == 0) {
        
        console.log(apiPicturesCountry);
        const response_PicturesCountryAPI = await fetch(apiPicturesCountry);
        const PicturesCountryToJSON = await response_PicturesCountryAPI.json();
        console.log(`No city images found, switching to pictures of ${country}`)
        res.send(PicturesCountryToJSON);
    } 
    else {
        console.log(apiPicturesCity);
        res.send(PicturesCityToJSON);
    }
})

//------------------------------------------------------------------------
//POST to the REST Countries Server API
//------------------------------------------------------------------------

// API REST Countries URL
const baseURL_Restcountries = 'https://restcountries.eu/rest/v2/alpha/';

 // POST Route /rest
app.post('/rest', async function(req, res) {
    
    
    countrycode = req.body.countryCode;
    console.log(`Countrycode: ${countrycode}`);
    
    const apiRestcountries = `${baseURL_Restcountries}${countrycode}`;
    console.log(apiRestcountries);
    const response_RestAPI = await fetch(apiRestcountries);
    const RestcountriesToJSON = await response_RestAPI.json();
    res.send(RestcountriesToJSON);
})

// designates what port the app will listen to for incoming requests
app.listen(8085, function () {
    console.log('Example app listening on port 8085!');
    console.log(`Your API key is ${process.env.API_KEY}`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})
