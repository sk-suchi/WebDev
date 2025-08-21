const nayok = {
    name: 'sakib khan',
    id: 121,
    address: 'dhaka',
    friends: ['opu', 'bubli'],
    movies: [
        { name: 'king khan', year: 2015 },
        { name: 'jongli', year: 2023 }
    ],
    act: function () {     // method (function inside object)
 console.log('acting like Sakib khan');
    },
    car: {    // nested inside nested object
        brand: 'tesla',
        price: 50000000,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }

}
console.log(nayok.act)
nayok.act()