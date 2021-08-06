function Burger(info) {
  this.price = info.price;
  this.calories = info.calories;

  this.getPrice = function () {
    return this.price;
  };
  this.getCallories = function () {
    return this.calories;
  };

  this.addModifier = function (modifier) {
    this.price += modifier.price;
    this.calories += modifier.calories;
  };
}

const sizeSmall = {
  type: "small",
  price: 50,
  calories: 20,
};
const sizeMedium = {
  type: "medium",
  price: 75,
  calories: 30,
};
const sizeLarge = {
  type: "large",
  price: 100,
  calories: 40,
};
const cheese = {
  type: "cheese",
  price: 10,
  calories: 20,
};
const salad = {
  type: "salad",
  price: 20,
  calories: 5,
};
const potato = {
  type: "potato",
  price: 15,
  calories: 10,
};
const spices = {
  type: "spices",
  price: 15,
  calories: 0,
};
const mayo = {
  type: "mayo",
  price: 20,
  calories: 5,
};

let burgerSmall = new Burger(sizeSmall);
let burgerMedium = new Burger(sizeMedium);
let burgerLarge = new Burger(sizeLarge);
burgerSmall.addModifier(mayo);
burgerSmall.addModifier(cheese);
console.log(`Price with sauce: ` + burgerSmall.getPrice());
console.log(`Callories with sauce: ` + burgerSmall.getCallories());
burgerLarge.addModifier(cheese);
console.log(`Price with sauce: ` + burgerLarge.getPrice());

