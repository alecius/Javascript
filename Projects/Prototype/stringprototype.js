//let myName = 'harshit    '

//console.log(myName.trim().length)   trim cuts the spaces 

const name = "HARSHIT     "

String.prototype.truelength = function(){   //now we can use this property in all strings
    console.log(`${this}`);               //whoever calls is this
    console.log(`${this.trim().length}`)
    
}

name.truelength()
"cartoon    ".truelength()
