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

    //------------------------------------------------------------------------
    //POST to the Geonames server API
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
    //POST to the Geonames server API
    //------------------------------------------------------------------------


    //update the index.html Results Form
    
        document.getElementById('polarity').innerHTML = `Score on Polarity: ${city_GeoData.city}`;
        document.getElementById("agreement").innerHTML = `Agreement: ${city_GeoData.country}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${city_GeoData.countryCode}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${city_GeoData.lat}`;
        document.getElementById("irony").innerHTML = `Irony: ${city_GeoData.lng}`;
    
     
}



export { handleSubmit }

