fetch('https://jsonplaceholder.typicode.com/users')  //used for web request, fetchAPI
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error) => {
    console.log(error)
})


//fetch return promise, fetch doesn't reject (network errors) http errors instead a then() handler check the response

//fetch queue

//fetch work done in two parts ->web browser for handle the api request ->reserved memory for data space

//network request response also the 404 response will go to Onfulfilled [].
//and if the response doesnt go then it will go on Onrejection [].