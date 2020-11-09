function tripUpdate(dates, geoData, weather, pictures, rest ){
    return `
            <section id="trip">
            <strong id="trip_headline">Your Trip</strong>
                <div id="destination">You are going to the beautiful city of: ${geoData.city}</div>
                <div id="first_picture"><img src="${pictures.hits[0].webformatURL}" alt""></div>
                <div id="timeframe">From the -xx- to the --x--</div>
                <div id="weather">Your weather will be ${weather.data[0].weather.description}</div>
                <div id="rest">${rest.name} has ${rest.capital} as its capital and a population of ${rest.population}</div>
                <div id="irony"></div>
            </section>
            `
}

export {tripUpdate}