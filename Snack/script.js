const array = ['pippo', 'PLUTO', 'Paperino'];

const newArray = array.map(element => element = element[0].toUpperCase() + element.slice(1).toLowerCase());

console.log('snack 1', newArray)
console.log('partenza:', array)
console.log('fine:', newArray)