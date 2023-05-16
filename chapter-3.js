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

//practice 3.5

let people = {
    friends: []
};
let var1 = {
    friendsFirstName: 'Mira', lastName: 'Parman', id: 5734
};
let var2 = {
    friendsFirstName: 'Shad', lastName: 'Ahmad', id: 5544
};
let var3 = {
    friendsFirstName: 'Ayla', lastName: 'Raisa', id: 7722
};
people.friends.push(var1, var2, var3);

console.log(people.friends);

console.log(people.friends[0].lastName);

// shads practice 
let parmansHome = {
    address: {
        streetName: 'taman seroja',
        houseNo: 22
    },
    livingRoom: {
        numberOfSofas: 3,
        areas: ['sofa', 'dining table']
    },
    inhabitants: [
        {
            name: 'Anis',
            age: 31,
            daughters: []
        },
        {
            name: 'Tin',
            age: 31,
            daughters: [,
                {
                    name: 'Ayla',
                    age: 1
                }
            ]
        }
    ]
};

// output 'dining table' to console
console.log(parmansHome.livingRoom.areas[1]);

// output ayla's age (1) to console
console.log(parmansHome.inhabitants[1].daughters[1].age);

// bonus: output the number of inhabitants to console
console.log(parmansHome.inhabitants.length);