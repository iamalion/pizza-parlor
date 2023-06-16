### TESTS
#### Describe Pizza()

Test: It will create a Pizza object with size as the property.
Code: let myPizza = new Pizza ("Medium");
Output: myPizza = _Pizza {size: "Medium"}_ 
<!--
function Pizza (size) {
  this.size = size;
}
-->
Test: It will create a Pizza object with size and toppings as properties.
Code: let myPizza = new Pizza ("Medium" ["Pepperoni", "Mushrooms","Olives"]);
Output: myPizza = _Pizza {size: "Medium", toppings: ["Pepperoni", "Mushrooms","Olives"]}_
<!--
function Pizza (size, ...toppings) {
  this.size = size;
  this.toppings = toppings;
}
-->