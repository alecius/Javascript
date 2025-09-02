async function getUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()    //json() it is also takes time thats why we make them await
        console.log(data)
    }    

    catch(error){
        console.log(error)
    }
}

getUser()