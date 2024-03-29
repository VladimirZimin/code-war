function openOrSenior(data) {
  return data.map((user) =>
    (user[0] >= 55) & (user[1] > 7) ? "Senior" : "Open"
  );
}

// function openOrSenior(data) {
//   return data.map(([age, handicap]) =>
//     age > 54 && handicap > 7 ? "Senior" : "Open"
//   );
// }

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
