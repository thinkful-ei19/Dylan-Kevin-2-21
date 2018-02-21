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
    console.log(key, obj[key]);
}
