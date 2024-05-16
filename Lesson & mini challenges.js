// 1st JS project: Surface calculus

let radius = 23;
let pi = Math.PI;

console.log(`The cake's surface is ${radius * radius * pi} cm²`);

// Fizzbuzz guess game:

//1st way : switch-case
let i = 0;
while (i <= 100) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log("FizzBuzz");
      break;

    case i % 5 === 0:
      console.log("buzz");
      break;
    case i % 3 === 0:
      console.log("fizz");
      break;
    default:
      console.log(i);
      break;
  }
  i++;
}

// 2nd way: if-else if statement:
let a = 0;
do {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log("FizzBuzz");
  } else if (a % 5 === 0) {
    console.log("buzz");
  } else if (a % 3 === 0) {
    console.log("fizz");
  } else console.log(a);

  a++;
} while (a <= 100);

//Collatz Conjecture

let N = 7;
do {
  if (N % 2 === 1) {
    N = 3 * N + 1;
    console.log(N);
  }
  if (N % 2 === 0) {
    N = N / 2;
    console.log(N);
  }
} while (N != 1);
