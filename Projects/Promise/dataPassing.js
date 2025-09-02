new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"alecius",email:"harshit@gmail"})
    },1000)

}).then(function(user){
    console.log(user)
})