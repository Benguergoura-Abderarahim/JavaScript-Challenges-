//After pnpm init => pnpm i prompt-synce to add that module that make prompt method working
//const prompt = require("prompt-sync")();

function checkSeason(month) {
  // Define the months for each season
  const winter_months = ["December", "January", "February"];
  const spring_months = ["March", "April", "May"];
  const summer_months = ["June", "July", "August"];
  const autumn_months = ["September", "October", "November"];

  // Check which season the month belongs to
  if (winter_months.includes(month)) {
    return "Winter";
  } else if (spring_months.includes(month)) {
    return "Spring";
  } else if (summer_months.includes(month)) {
    return "Summer";
  } else if (autumn_months.includes(month)) {
    return "Autumn";
  } else {
    return "Invalid Month";
  }
}

// Input the month (run only in terminal)
//let month = prompt("Choose a month: ");

let month = "December";
console.log("The month is: ", month);
console.log("Correspondant season is: ", checkSeason(month));
