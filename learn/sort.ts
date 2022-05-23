const arr1: Array<number[]> = [
  [1, 2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
];

// const arr2 = [ 1, 5, 8, 2, 6, 9, 3, 7, 10, 4 ]

// let maxLen = 0
// arr1.forEach(x => {
//   if (x.length > maxLen) {
//     maxLen = x.length
//   }
// });

// for (let i = 0; i < arr1.length; i++) {
//   let x = arr1[i];
//   console.log({x, i})
//   for (let j = 0; j < x.length; j++) {
//     let y = x[j];
//     console.log({y})
//   }
// }

let x = 0,
  y = 0;
let arr2: number[] = [];
while (arr1[x][y]) {
  console.log({ x, y });
  arr2.push(arr1[x][y]);
  x += 1;
  if (!arr1[x]) {
    x = 0;
    y += 1;
  }
}
console.log(arr2);

export {}