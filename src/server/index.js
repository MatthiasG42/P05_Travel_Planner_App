var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

const dotenv = require('dotenv')
dotenv.config()

/*var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}*/

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

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

/*var textapi = new mcloud({
    application_key: process.env.API_KEY
 });*/

 // API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
let userInput = [];

 // POST Route
app.post('/api', async function(req, res) {
    userInput = req.body.url;
    console.log(`URL to be processed: ${userInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    const APIdata = await response.json()
    console.log(APIdata)
    res.send(APIdata)
    /** server sends only specified data to the client with below codes
     * const projectData = {
     *  score_tag : mcData.score_tag,
     *  agreement : mcData.agreement,
     *  subjectivity : mcData.subjectivity,
     *  confidence : mcData.confidence,
     *  irony : mcData.irony
     * }
     * res.send(projectData);
     * */
})


// designates what port the app will listen to for incoming requests
app.listen(8085, function () {
    console.log('Example app listening on port 8085!');
    console.log(`Your API key is ${process.env.API_KEY}`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})
