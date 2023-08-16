const PizzaShop = require("./pizzaShop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(
      `Order Received for ${size} with ${topping} topping.. Baking a pizza`
    );
    drinkMachine.serveDrink(size);
  });
  
  pizzaShop.order("large", "Cheese");
  pizzaShop.displayOrderNo();