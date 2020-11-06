function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    
    if(Client.checkForURL(formText))
    {
        console.log(formText)

        console.log("::: Form Submitted :::")

        postData('http://localhost:8085/api', {url: formText})

        .then(function(APIdata) {
            document.getElementById('polarity').innerHTML = `Score on Polarity: ${APIdata.score_tag}`;
            document.getElementById("agreement").innerHTML = `Agreement: ${APIdata.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${APIdata.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${APIdata.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${APIdata.irony}`;
        })
    }   else {
            alert('The URL is probably invalid. Please try again.');
        }
    
}


//POST to the server
const postData = async ( url = '', APIdata = {})=>{
    console.log('In Progress...', APIdata)
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(APIdata)
    });
  
    try {
        const newAPIData = await response.json();
        console.log('Analysation complete: ', newAPIData)
        return newAPIData;
        } catch(error) {
            console.log("error", error);
        }
  }

export { handleSubmit }

