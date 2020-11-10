//function to update the webpage
function tripUpdate(dates, geoData, weather, pictures, rest ){
    return `
            <section class= "trip_card" id="trip">
            
                <div class="city_image" id="first_picture"><img src="${pictures.hits[0].webformatURL}" alt""></div>

                <div class="trip_header">Your trip to ${geoData.city}</div>

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

                <div class="trip_card_weather">
                    <div class="w_date">Date</div>
                    <div class="d1">${weather.data[0].datetime}</div>
                    <div class="d2">${weather.data[1].datetime}</div>
                    <div class="d3">${weather.data[2].datetime}</div>
                    <div class="w_des">Weather Description</div>
                    <div class="w_d1">${weather.data[0].weather.description}</div>
                    <div class="w_d2">${weather.data[1].weather.description}</div>
                    <div class="w_d3">${weather.data[2].weather.description}</div>
                    <div class="w_hl">Temperature High / Low</div>
                    <div class="whl_d1">${weather.data[0].max_temp}°C / ${weather.data[0].min_temp}°C</div>
                    <div class="whl_d2">${weather.data[1].max_temp}°C / ${weather.data[1].min_temp}°C</div>
                    <div class="whl_d3">${weather.data[2].max_temp}°C / ${weather.data[2].min_temp}°C</div>
                </div>
                <div class="trip_card_weather_page2">
                    <div class="d4">${weather.data[3].datetime}</div>
                    <div class="d5">${weather.data[4].datetime}</div>
                    <div class="d6">${weather.data[5].datetime}</div>
                    <div class="d7">${weather.data[6].datetime}</div>
                    <div class="w_d4">${weather.data[3].weather.description}</div>
                    <div class="w_d5">${weather.data[4].weather.description}</div>
                    <div class="w_d6">${weather.data[5].weather.description}</div>
                    <div class="w_d7">${weather.data[6].weather.description}</div>
                    <div class="whl_d4">${weather.data[3].max_temp}°C / ${weather.data[3].min_temp}°C</div>
                    <div class="whl_d5">${weather.data[4].max_temp}°C / ${weather.data[4].min_temp}°C</div>
                    <div class="whl_d6">${weather.data[5].max_temp}°C / ${weather.data[5].min_temp}°C</div>
                    <div class="whl_d7">${weather.data[6].max_temp}°C / ${weather.data[6].min_temp}°C</div>
                </div>

                <div class="rest_info" id="rest">
                    <div>${rest.name} is a part of ${rest.subregion}</div>
                    <div>${rest.capital} is the capital and the total population is ${rest.population/1000000} Million</div>
                    <div>The main language is ${rest.languages[0].name} and at home the country is known as ${rest.nativeName}</div>
                </div>
            </section>
            `
}
export {tripUpdate}
