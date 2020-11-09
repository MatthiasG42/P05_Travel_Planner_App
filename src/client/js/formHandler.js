const handleSubmit = async (event) => {
    event.preventDefault()

    // receive the input
    let city_input = document.getElementById('city').value
      
    //console.log(city_input)

    console.log("::: Form Submitted :::")

    //Global Variables to save API data
    let city_GeoData = {}
    let city_WeatherData = {}
    let city_ImagesData = {}
    let country_RestData = {}

    //------------------------------------------------------------------------
    //POST to the Geonames API
    //------------------------------------------------------------------------
    console.log('In Progress...', city_input)

    const response_GeoAPI = await fetch("http://localhost:8085/geodata", {
        method: 'POST', 
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify({city: city_input})
    });
  
    try {
            const newGeoData = await response_GeoAPI.json();
            city_GeoData = {
                city: newGeoData.geonames[0].name,
                country: newGeoData.geonames[0].countryName,
                countryCode: newGeoData.geonames[0].countryCode,
                lat: newGeoData.geonames[0].lat,
                lng: newGeoData.geonames[0].lng
            }
            console.log('Geotracking complete: ', city_GeoData)
        } 
        catch(error) {
            console.log("error", error);
        }

    //------------------------------------------------------------------------
    //POST to the Weatherbit server API
    //------------------------------------------------------------------------
    
    const response_WeatherAPI = await fetch("http://localhost:8085/weatherdata", {
        method: 'POST', 
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(city_GeoData)
    });
  
    try {
            city_WeatherData = await response_WeatherAPI.json();
            
            console.log('Weather forecast complete: ', city_WeatherData)
        } 
        catch(error) {
            console.log("error", error);
        }

    //------------------------------------------------------------------------
    //POST to the Pixabay Server API
    //------------------------------------------------------------------------

    const response_PicturesAPI = await fetch("http://localhost:8085/pictures", {
        method: 'POST', 
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(city_GeoData)
    });
  
    try {
            city_ImagesData = await response_PicturesAPI.json();
            
            console.log('Pictures search complete: ', city_ImagesData)
        } 
        catch(error) {
            console.log("error", error);
        }

    //------------------------------------------------------------------------
    //POST to the REST Countries Server API
    //------------------------------------------------------------------------

    const response_RestcountriesAPI = await fetch("http://localhost:8085/rest", {
        method: 'POST', 
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(city_GeoData)
    });
  
    try {
            country_RestData = await response_RestcountriesAPI.json();
            
            console.log('REST Countries search complete: ', country_RestData)
        } 
        catch(error) {
            console.log("error", error);
        }

    //update the index.html Results Form
    
        document.getElementById('polarity').innerHTML = `Score on Polarity: ${city_GeoData.city}`;
        document.getElementById("agreement").innerHTML = `Agreement: ${city_GeoData.country}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${city_GeoData.countryCode}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${city_GeoData.lat}`;
        document.getElementById("irony").innerHTML = `Irony: ${city_GeoData.lng}`;
    
     
}



export { handleSubmit }

