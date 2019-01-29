const arr1 = [1,2,4,5];
// console.log(arr1);

// const arr2 = arr1.map(item => item * 2);

// console.log(arr2);


function mapForEach(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  };
  return newArr;
}


const arr2 = mapForEach(arr1, function(item) {
  return item * 2;
});

console.log(`Arr 2: ${arr2}`);
console.log('--------------------');

const arr3 = mapForEach(arr1, function(item) {
  return item > 2;
});

console.log(`Arr 3: ${arr3}`);

console.log('--------------------');
const checkPastLimit = (limiter, item) => item > limiter;

const arr4 = mapForEach(arr1, checkPastLimit.bind(this,1));

console.log(`Arr 4: ${arr4}`);


const checkPastLimitSimple = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this,limiter);
};

const arr5 = mapForEach(arr1, checkPastLimitSimple(1));
console.log(arr5);


