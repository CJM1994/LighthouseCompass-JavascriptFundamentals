const chooseRecipe = function (bakeryA, bakeryB, recipes) {

  let bakeryAMatches = [];
  let bakeryBMatches = [];

  // Checks for ingredient matches and makes arrays with all recipes that have a matching ingredient
  for (const recipe of recipes) {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      for (let j = 0; j < bakeryA.length; j++) {
        if (recipe.ingredients[i] === bakeryA[j]) {
          bakeryAMatches.push(recipe);
        }
      }
      for (let j = 0; j < bakeryB.length; j++) {
        if (recipe.ingredients[i] === bakeryB[j]) {
          bakeryBMatches.push(recipe);
        }
      }
    }
  }

  // Checks arrays of recipes with a match for a recipe that is shared in both arrays
  for (const matchesA of bakeryAMatches) {
    for (const matchesB of bakeryBMatches) {
      if (matchesA === matchesB) {
        return matchesB;
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
