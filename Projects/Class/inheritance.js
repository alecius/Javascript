class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Student extends User {
    constructor(username,email,password){
        super(username)   //this super keyword sets the username from by inheriting properties of user
        this.email = email;
        this.password = password;
    }

    addAccount(){
        console.log(`A new account was formed by ${this.username}`)
    }
}

const alecius = new Student('harshit','harshit@fb.com',122)
alecius.logMe()
alecius.addAccount()

const anny = new User('ANNY')
anny.logMe()

console.log(alecius === Student)
console.log(alecius instanceof Student)
console.log(alecius instanceof User)