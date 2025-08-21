const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

// dot notation
const income = person.salary;
console.log(income)

// bracket Notation 
console.log(person['age'])
const boyos = person['age']
console.log(boyos)

console.log(person['fav places'])

const keyName = 'profession';
console.log(person[keyName])