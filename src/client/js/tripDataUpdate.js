function tripUpdate(dates, geoData, weather, pictures, rest ){
    return `
            <section class= "trip_card" id="trip">
            <strong id="trip_headline">Your Trip</strong>
                <div id="destination">You are going to the beautiful city of: ${geoData.city}</div>
                <div id="first_picture"><img src="${pictures.hits[0].webformatURL}" alt""></div>
                <div id="dates">You go from the ${dates.trip_start_date} to the ${dates.trip_end_date}</div>
                <div id="timeframe">That is ${dates.days_left} days from today, and your trip duration is ${dates.trip_duration} days</div>
                <div id="weather">Your weather will be ${weather.data[0].weather.description}</div>
                <div id="rest">${rest.name} has ${rest.capital} as its capital and a population of ${rest.population}</div>
                <div id="irony"></div>

                <div class="trip_card_days">
                    <div class="Start">Trip Start</div>
                    <div class="End">Trip End</div>
                    <div class="Dur">Trip Duration</div>
                    <div class="Days">Days Left</div>
                    <div class="var_start">${dates.trip_start_date}</div>
                    <div class="var_end">${dates.trip_end_date}</div>
                    <div class="var_dur">${dates.trip_duration}</div>
                    <div class="var_days">${dates.days_left}</div>
                </div>
            </section>
            `
}


export {tripUpdate}