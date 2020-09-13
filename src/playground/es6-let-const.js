var nameVar = 'Emmanuel';
var nameVar = 'Jessica';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Jess';
// nameConst = 'Ind'
console.log('nameConst', nameConst);

function getpetName() {
  const petName = 'Hae';
  return petName;
}

const fullName = 'Emmanuel Arkorful';
let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
