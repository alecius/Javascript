class React {
    constructor(){
        this.name = 'REACT'
        this.server = 'https://localhost:400'

        document
        .querySelector("button")
        .addEventListener('click',this.handleClick.bind(this)) // binds the class's methods, constructor 
    }
    
    handleClick(){
        console.log("button clicked")
        console.log(this.server)
    }

}

const obj = new React()