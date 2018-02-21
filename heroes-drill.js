const heroes = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne( arr, query ) {
  let result;
  if ( query.id && query.name && query.squad ) {
    result = arr.find(val => val.id === query.id && val.name === query.name && val.squad === query.squad);
  } else if ( query.id && query.name && !(query.squad) ) {
    result = arr.find(val => val.id === query.id && val.name === query.name);
  } else if ( query.id && !(query.name) && !(query.squad) ) {
    result = arr.find(val => val.id === query.id);
  }
  
  if (result === undefined) {
    return null;
  } else {
    return result;
  }
}

let findHero = findOne( heroes, { id: 4, name: 'Superman', squad: 'Justice League' });
console.log(findHero);