//Business Logic

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
          if (this.toppings[i] === "pepperoni" || this.toppings[i] === "onions" || this.toppings[i] === "olives"){
              this.totalCost += 1;
          }
          if (this.toppings[i] === "bacon" || this.toppings[i] ==="pineapple" || this.toppings[i] === "jalapeno"){
              this.totalCost += 2;
          }
          if (this.toppings[i] === "tomato" || this.toppings[i] === "honey" || this.toppings[i] === "cheez") {
            this.totalCost += 3;
          }
      }
}

//UI Logic
function handleForm(event) {
    event.preventDefault();
    let sizeSelect = document.querySelector('input[name="pizza-size"]:checked').value;
    console.log(sizeSelect)
    if (sizeSelect.value === "small"){
        console.log(sizeSelect.value);
        sizeSelect = "small"
    } else if (sizeSelect.value === "medium"){
        sizeSelect = "medium"
    } else if (sizeSelect.value === "large"){
        sizeSelct = "large"
    }
    let myPizza = new Pizza(sizeSelect);
    myPizza.cost();
    console.log(myPizza);


}

window.addEventListener("load",function() {
    let form = document.getElementById("pizza-form");
    form.addEventListener("submit", handleForm)
})

