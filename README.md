# Crust & Craft Pizzeria
#### by _Lindsay Warr_

### Description
Crust & Craft Pizzeria is the project from Week 4 at Epicodus. It allows a customer to select a pizza size and additional toppings. It then calculates the total cost for the customer.

### Technologies Used
* HTML
* CSS
* JavaScript
* Git
* GitHub

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
#### Describe Pizza.prototype.cost()

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
Test 4: "It will add an additional fee for every topping."
Code: let myPizza = new Pizza("medium","Pepperoni","Onions","Olives")
Output: Pizza {size: 'medium', toppings: ["Pepperoni","Onions","Olives"], totalCost: 18}
<!--
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
-->

### Setup/Installation Requirements 

* Clone this repository
* Open in VS Code 
* Use "Go Live" to see in your browser

_Alternatively, visit the static page at https://iamalion.github.io/pizza-parlor/_

### Known Bugs

* none at this time

### License

MIT License

Copyright (c) June 2023 Lindsay Warr
Contact me at iamalion@gmail.com with any questions, comments, or suggestions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _date_ _author name(s)_
