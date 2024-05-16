//method 1 switch-case
let randomizer = Math.floor(Math.random() * 4);

console.log("You picked up: ", randomizer);

switch (randomizer) {
  case 0:
    console.log("A certain victory");
    break;
  case 1:
    console.log("not so certain victory");
    break;
  case 2:
    console.log("an uneasy victory");
    break;
  default:
    console.log("Your fate is unclear, ô chosen undead");
    break;
}

// method 2 : if-else if statements
randomizer = Math.floor(Math.random() * 4);

console.log("You picked up: ", randomizer);

if (randomizer === 0) {
  console.log("A certain victory");
} else if (randomizer === 1) {
  console.log("not so certain victory");
} else if (randomizer === 2) {
  console.log("an uneasy victory");
} else {
  console.log("Your fate is unclear, ô chosen undead");
}
