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

 // API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = process.env.API_KEY;

 // POST Route
app.post('/api', async function(req, res) {
    const userURL = req.body.url;
    console.log(`URL to be processed: ${userURL}`);
    const apiURL = `${baseURL}?key=${apiKey}&url=${userURL}&lang=en`;

    const response = await fetch(apiURL);
    const APIdata = await response.json();
    console.log(APIdata);
    res.send(APIdata);
})

// designates what port the app will listen to for incoming requests
app.listen(8085, function () {
    console.log('Example app listening on port 8085!');
    console.log(`Your API key is ${process.env.API_KEY}`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})
