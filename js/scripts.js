function Pizza (size, ...toppings) {
    this.size = size;
    this.toppings = toppings;
    this.totalCost = 0;
  }
  
Pizza.prototype.cost = function () {
    if (this.size.toLowerCase() === "small"){
        this.totalCost = 10;
    } else if (this.size.toLowerCase() === "medium"){
        this.totalCost = 15;
    } else if (this.size.toLowerCase() === "large"){
        this.totalCost = 20;
    } 
    for (let i = 0; i <this.toppings.length; i++){
          if (this.toppings[i] === "Pepperoni" || this.toppings[i] === "Onions" || this.toppings[i] === "Olives"){
              this.totalCost += 1;
          }
          if (this.toppings[i] === "Bacon" || this.toppings[i] ==="Pineapple" || this.toppings[i] === "Jalapeño Slices"){
              this.totalCost += 2;
          }
          if (this.toppings[i] === "Fresh tomato" || this.toppings[i] === "Hot honey" || this.toppings[i] === "Sub vegan cheese") {
            this.totalCost += 3;
          }
      }
}