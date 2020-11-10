# P05 Build a Travel Planner APP
This is the fith and final project for the Udacity course "Front End Web Developer"

## Table of Contents

* [Description](#Description)
* [Functions](#Functions)
* [Dependencies](#Dependencies)
* [Extras](#Extras)
* [Author](#Author)


## Description

The goal of this project is a travel application. It’s common to pull basic data from an API, but many applications don’t just pull the weather, they pull in multiple types of data, from different sources and occasionally one API will be required to get data from another API. 

In this case we first convert the city name to Geodata, and check with these informations the weather forecast. Furthermore we look for pictures for the city, if that does not work we look for pictures of the country.
And finally we look up aditional information of the country we want to travel to.

Using this gathered information packages we use it to update our app with a Trip-Information-Card.
We can also ask for multiple trips to be planned and displayed.

And finally we can also test the functiabity of the functions and the server using JEST


## Functions

- opens on port 8085
- reads the input that all inputs are correct, alert the user otherwise
- -> city input not empty; startdate in the future; enddate not before startdate; 
- the city location is enhanced with geodata, wich is used to pull the weather
- requesting the relevant information from pixabay and restcountries
- store all information in those 4 variables
- uses this information package to update the UI on the webpage

## Dependencies
- Node
- Cors
- Express
- Webpack
- dotenv
- Workbox
- Jest
- Supertest

* API
- Geonames API
- Weatherbit API
- Pixabay API
- Rest Countries API

## Extras / Stand Out Section
- Add end date and display length of trip. 
- Pull in an image for the country from Pixabay API when the entered location brings up no results 
- Integrate the REST Countries API to pull in data for the country being visited.
- Instead of just pulling a single day forecast, pull the forecast for multiple days.
- Allow the user to add additional trips on the same webpage (but no sort or highlighted expired trips)

## Author
Matthias Gudernatsch
