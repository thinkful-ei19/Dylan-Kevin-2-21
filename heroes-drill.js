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
  if ( query.id !== undefined && query.name === undefined && query.squad === undefined ) {
    return arr.find(val => val.id === query.id);
  } else if ( query.id !== undefined && query.name !== undefined && query.squad === undefined ) {
    return arr.find(val => val.id === query.id && val.name === query.name);
  } else if ( query.id !== undefined && query.name !== undefined && query.squad !== undefined ) {
    return arr.find(val => val.id === query.id && val.name === query.name && val.squad === query.squad);
  }
}

let findHero = findOne( heroes, { id: 4, name: 'Superman' });
console.log(findHero);