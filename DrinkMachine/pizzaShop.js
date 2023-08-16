const EventEmitter = require("node:events");

// Inheritance is used here Shop class is inheriting from the EventEmitter Class
class PizzaShop extends EventEmitter {
  constructor() {
    super(); // Call the constructor of the parent class
    this.orderNo = 0;
  }

  order(size, topping) {
    this.orderNo++;
    this.emit("order", size, topping);
  }
  displayOrderNo() {
    console.log(`This is order No : ${this.orderNo}`);
  }
}

module.exports = PizzaShop;
