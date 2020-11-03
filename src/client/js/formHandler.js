function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    //fetch('api.meaningcloud.com/sentiment-2.1?key=e9caf65530c914ff1792df2f6e1c0908&of=json&txt=What%20a%20great%20day%20it%20is%20!&model=general&lang=en')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
