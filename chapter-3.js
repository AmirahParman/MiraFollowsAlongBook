//Practice 3.1
grocery = ['Milk', 'Bread', 'Apples'];
console.log(grocery.length);
grocery[1] = 'Bananas';
console.log(grocery);

//Practice 3.2
shoppingList = ['Milk', 'Bread', 'Apples'];
console.log(shoppingList);

shoppingList.splice(1, 1, 'Banana', 'Egg');
console.log(shoppingList);

shoppingList.sort();
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);


// let findMilk = shoppingList.find(function (findMilk) { return findMilk === 'Milk' });
// let findIndexValueOfMilk = shoppingList.indexOf('Milk');

// console.log(findMilk, findIndexValueOfMilk);


shoppingList.splice(2, 0, 'Carrots', 'Lettuce');
console.log(shoppingList);

let shoppingList1 = shoppingList;
let shoppingList2 = ['Juice', 'Pop'];
let updatedShoppingList = shoppingList1.concat(shoppingList2, shoppingList2);

updatedShoppingList.sort();
console.log(updatedShoppingList);

let findTheLastIndexOfPop = updatedShoppingList.lastIndexOf('Pop');
console.log(findTheLastIndexOfPop);