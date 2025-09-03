const user = {
    username: 'harshit',
    loginCount: 5,
    signedIN: true,

    getUserDetails:function(){
        console.log(`USER is ${this.username}`)
    }

}
// console.log(user.getUserDetails())

function User(username,loginCount,isloggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isloggedIn=isloggedIn

    return this
}

const userOne = new User('harshit',12,true) //new keyword is a constructor function that create a new instance or empty object(new copy that won't affect the original copy)
const userTwo = new User('gyan',6,false)   //overwrite the data if we doesn't use the new keyword
console.log(userOne)
console.log(userTwo)