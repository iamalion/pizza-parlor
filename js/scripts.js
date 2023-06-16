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