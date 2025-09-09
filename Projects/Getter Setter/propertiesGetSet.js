function User(email,password){
    this._email = email;
    this._password = password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        },
    })
    
}

const harsh = new User('harshit@fb.com','1234')
console.log(harsh.email)