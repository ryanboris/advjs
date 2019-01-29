function greet(whatToSay) {
  return function(name) {
    console.log(`${whatToSay} ${name}`);
  };
}

/* eslint-disable-next-line */
var sayHi = greet('hi');
sayHi('tony');
