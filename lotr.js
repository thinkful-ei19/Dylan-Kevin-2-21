'use strict';

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        weapon,
        describe: function() {
            return `${this.name} is a ${this.race} from ${this.origin} uses ${this.weapon}.`;
        },
        evaluateFight: function(enemy) {
            let ownDamage = enemy.attack - this.defense;
            let enemyDamage = this.attack - enemy.defense;
            if (ownDamage < 0) {
                ownDamage = 0;
            }
            if (enemyDamage < 0) {
                enemyDamage = 0;
            }
            return `Your opponent takes ${enemyDamage} damage and you receive ${ownDamage} damage.`;
        }
    };
}

let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff');
let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring');
let frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade');
let aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril');
let legolas = createCharacter('Legolas', 'Legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow');
let arwen = createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendale', 6, 10, 'Hadhafang');

const characters = [
    gandalf, bilbo, frodo, aragorn, legolas
];

characters.push(arwen);

const test = characters.find(obj => obj.nickname === 'aragorn').describe();
// console.log(test);

const hobbits = characters.filter(character => character.race === 'Hobbit');
const warriors = characters.filter(character => character.attack > 5);
console.log(warriors);

