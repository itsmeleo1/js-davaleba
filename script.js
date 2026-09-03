// let N = Number(+prompt("sheiyvanet ricxvi"));
// let Count = 0;
// let Sum = 0;
// for (let i = 1; i < N; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//     Count++;
//     Sum += i;
//   }
// }
// console.log("amdenia:", Count);
// console.log("jami", Sum);

// let N = Number(+prompt("ricxvi"));
// let droebit = N;
// let DCount = 0;
// let DSum = 0;
// let DProduct = 1;
// let maxDigit = 0;
// let minDigit = 9;

// while (droebit > 0) {
//   let digit = droebit % 10;
//   DCount++;
//   DSum += digit;
//   DProduct *= digit;
//   if (digit > maxDigit) {
//     maxDigit = digit;
//   }
//   if (digit < minDigit) {
//     minDigit = digit;
//   }
//   droebit = Math.floor(droebit / 10);
// }
// console.log(DCount);
// console.log(DSum);
// console.log(DProduct);
// console.log(maxDigit);
// console.log(minDigit);

let SecretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

while (guess !== SecretNumber) {
  guess = Number(prompt("1-100 guess >:("));
  attempts++;
  if (guess < SecretNumber) {
    alert("Higher");
  } else if (guess > SecretNumber) {
    alert("Lower");
  } else {
    alert("Correct!");
  }
}

console.log("tries", attempts);
