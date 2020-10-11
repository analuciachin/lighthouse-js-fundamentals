const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log('For loop')
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write a for loop that prints out the contents of ingredients:
console.log('While loop')
let j = 0;
while (j < ingredients.length) {
  console.log(ingredients[j]);
  j++;
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('Ingredients backward')
let x = ingredients.length - 1
while (x >= 0) {
  console.log(ingredients[x]);
  x--;
}