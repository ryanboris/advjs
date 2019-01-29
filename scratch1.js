/* eslint-disable */
const arr = [
  [3, 4, 5, 4, 3, 3],
  [1, 2, 3, 3, 4, 3],
  [7, 8, 9, 2, 3, 4],
  [1, 1, 1, 3, 3, 4],
  [1, 1, 1, 3, 3, 4],
  [1, 1, 1, 3, 3, 4]
];

function hourGlassDigits(arr) {
  const tempArr = [];
  for (let j = 0; j < arr.length; j = j + 1) {
    for (let i = 0; i < arr.length; i = i + 1) {
      // if(j % 2 === 0 || j % 2 !== 0 && i % 2 !== 0) {
        tempArr.push(arr[j][i]);

    // }
  }
}
return tempArr;
}

console.log(hourGlassDigits(arr));

