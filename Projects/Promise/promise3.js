const promise = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error=true   
        if(!error){
            resolve({username:"javascript",password:"1234"})
        }
        else{
            reject('ERROR: js WENT WRONG')
        }
    },1000)
});

async function consumePromise(){         //async await directly cannot handle the errors 
    try {                                // thats why we use try catch to handle error
        const response = await promise
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise()