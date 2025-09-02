new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false   //true for reject,false for resolve
        if(!error){
            resolve({username:"harshit",password:"1234"})
        }
        else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    },1000)

}).then((user) => {        //chaining 
    console.log(user);
    return user.username

}).then((username) =>{
    console.log(username)

}).catch(function(err){      //catch for reject
    console.log(err)

}).finally(() => {        // finally will run is the promise run
    console.log("the promise is either resolved or rejected")
})
    
