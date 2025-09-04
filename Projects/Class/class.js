class User {
    constructor(username, email, paassword){
        this.username = username;
        this.email = email;
        this.paassword = paassword;
    }

    encryptPassword(){
        return `${this.paassword}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User('harshit','harshit@fb.com',1234)

console.log(user1.encryptPassword())
console.log(user1.changeUsername())