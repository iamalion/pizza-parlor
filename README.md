### TESTS
#### Describe Pizza()

Test 1: It will create a Pizza object with size as the property.
Code: let myPizza = new Pizza ("Medium");
Output: myPizza = _Pizza {size: "Medium"}_ 
<!--
function Pizza (size) {
  this.size = size;
}
-->
Test 2: It will create a Pizza object with size and toppings as properties.
Code: let myPizza = new Pizza ("Medium" ["Pepperoni", "Mushrooms","Olives"]);
Output: myPizza = _Pizza {size: "Medium", toppings: ["Pepperoni", "Mushrooms","Olives"]}_
<!--
function Pizza (size, ...toppings) {
  this.size = size;
  this.toppings = toppings;
}
-->
Test 3: It will assign a cost of $10 to a pizza with a "small" property, $15 to a "medium", and $20 to a "large".
Code: myPizza("Medium","Cheese");
Output: myPizza {size: "Medium", toppings: "Cheese", totalCost: 15}
<!--
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.totalCost = 0;
}

Pizza.prototype.cost = function () {
    if (this.size.toLowerCase() === "small"){
        this.totalCost = 10;
        return this.totalCost;
    } else if (this.size.toLowerCase() === "medium"){
        this.totalCost = 15;
        return this.totalCost;
    } else if (this.size.toLowerCase() === "large"){
        this.totalCost = 20;
        return this.totalCost;
    } 
    return this.totalCost;
}
-->