class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createID(){    //by using static keyword object instance cannot access this method 
        return `123`
    }
}

const harsh = new User('harshit')
harsh.logMe()
//harsh.createID()  We cannot access the static method by object instance
console.log(User.createID()) //only from class we can access