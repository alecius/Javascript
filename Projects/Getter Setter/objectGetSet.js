const User = {
    _email :'harshit@g.com',
    password:'abc',

    get email(){
        return this._email
    },
    set email(value){
        this._email = value
    }
}

const harsh = Object.create(User)
console.log(harsh.email)