'use strict';

const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return (this.flour / this.water) * 100;
    }
};

// console.log(loaf.flour, loaf.water);

// console.log(loaf.hydration());

const obj = {
    foo: 'cool',
    bar: 'dull',
    fum: 'alright',
    quux: 'sweet',
    spam: 'bitter'
}

for (let key in obj) {
    // console.log(key, obj[key]);
}
/////////////////

const mealObj = {
    meal: [
        'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'
    ]
};

// console.log(mealObj.meal[3]);

//////////////////////

const person1 = {
    name: 'Bill',
    jobTitle: 'Janitor'
};

const person2 = {
    name: 'Ted',
    jobTitle: 'pilot'
};

const person3 = {
    name: 'Alfred',
    jobTitle: 'Web Dev'
};

const person4 = {
    name: 'Jenny',
    jobTitle: 'Manager'
};

const personArray = [person1, person2, person3, person4];

personArray.forEach(obj => console.log(`${obj.name}: ${obj.jobTitle}`));