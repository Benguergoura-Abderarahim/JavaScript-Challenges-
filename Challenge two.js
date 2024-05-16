let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capitals = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];

//1st method : forEach
countries.forEach((country, index) => {
  let message = `Your country: ${country} has the capital named: ${capitals[index]}.`;
  console.log(message);
});

//2nd method : fromEntries

let countryToCapital = Object.fromEntries(
  countries.map((country, index) => [country, capitals[index]])
);

for (const [country, capital] of Object.entries(countryToCapital)) {
  console.log(`Your country: ${country} has the capital named: ${capital}.`);
}

//3rd method: a classic for loop
for (let i = 0; i < countries.length; i++) {
  let country = countries[i];
  let capital = capitals[i];
  console.log(`Your country: ${country} has the capital named: ${capital}.`);
}
