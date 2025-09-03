const user ={
    username: 'harshit'
}
const arr =["harshit","12"]

Object.prototype.harshit = function(){    //adding a property to every object by object (array,function,string,object)
    console.log("harshit is present in prototype")
}

Array.prototype.hello = function(){
    console.log("hello")
}

user.harshit()
arr.harshit()

arr.hello()
//user.hello()