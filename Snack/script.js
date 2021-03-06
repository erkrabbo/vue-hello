const array = ['pippo', 'PLUTO', 'Paperino'];

const newArray = array.map(element => element = element[0].toUpperCase() + element.slice(1).toLowerCase());

console.log('snack 1')
console.log('partenza:', array)
console.log('fine:', newArray)


const animals =[
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

const mammiferi = animals.filter(element => element.classe == 'mammiferi');
console.log('----------------------')
console.log('snack 2')
console.log('partenza:', animals)
console.log('fine', mammiferi);
console.log('----------------------')


const persone = [
    {
        nome: 'Luca',
        cognome: 'ciacia',
        età: 987
    },
    {
        nome: 'Valentina',
        cognome: 'cia',
        età: 22
    },
    {
        nome: 'Marco',
        cognome: 'colli',
        età: 15
    },
    {
        nome: 'Gianni',
        cognome: 'giannini',
        età: 13
    },
]

const info = persone.map(element => `${element.nome} ${element.cognome} ha ${element.età} anni quindi` + (element.età >= 18 ? ' può guidare' : ' non può ancora guidare legalmente'));

console.log('Snack 3')
console.log(info)