// const add = (a, b) => {
//   //   console.log(arguments);
//   return a + b;
// };

// console.log(add(1, 5));

// const user = {
//   name: 'Emmanuel',
//   cities: ['Accra', 'Takoradi', 'Tema'],
//   printPLacesLived() {
//     return this.cities.map((city) => this.name + ' has lived in ' + city);
//   },
// };

// console.log(user.printPLacesLived());


const multiplier = {
    numbers : [1,2,3],
    multiplyBy : 6,
    multiply() {
       return this.numbers.map((number) => number * this.multiplyBy)
    },
}

console.log(multiplier.multiply());