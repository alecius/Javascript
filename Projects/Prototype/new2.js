function product(name,cost){
    this.name=name
    this.cost=cost
}

product.prototype.increment = function(){
    this.cost++     
}

product.prototype.print = function(){
    console.log(`Product is ${this.name} and  cost is ${this.cost}`)
}

//there was no default functions 

const bread = new product('bread',50) //new keyword helps to tell about the additional properties of the function 
const tea = new product('tea',100)

bread.print()