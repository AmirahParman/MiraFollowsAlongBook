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

//practice 3.4

let myCar = {
    make: 2023,
    model: 'advanced',
    type: 'SUV',
    autonomous: false,
    colour: 'black',
}

let prop2access = 'colour';

myCar[prop2access] = 'white';
myCar.forSale = false;

console.log(myCar['model'], myCar['make'])

console.log(myCar)

myCompany = {
    name: 'tdcx',
    address: {
        state: 'kl',
        postcode: 43900,
        number: 13,
        recepient: {
            name: ['Myself', 'Shad', 'Raisa', 'Blomma'],
            age: 20
        }
    }
}

console.log(myCompany.address.recepient.name[1])
