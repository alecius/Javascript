function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    SetUsername.call(this, username)  //call holds the reference , context passing by giving this 

    this.email = email
    this.password = password
}

const harshit = new createUser("harshit", 'harshit@fb.com', '2224')
console.log(harshit)