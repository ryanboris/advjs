/* eslint-disable */
// function greet() {
//   console.log('hi');
// }

// var anonymousGreet = function() {
//   console.log('hi');
// };

// anonymousGreet();

// function log(a) {
//   a();
// }

// log(function() {
//   console.log('hi');
// });

// var a = 3;
// var b;

// b = a;
// a = 2;
// console.log(a);
// console.log(b);

// var c = { greeting: 'hi' };
// var d;

// d = c;
// c.greeting = 'heyyy';
// console.log(c);
// console.log(d);

/**
 * *by value
 * +[ ] by reference
 */

// var c = {
//   name: 'the c object',
//   log: function() {
//     var self = this;
//     console.log(self);

//     var setname = function(newname) {
//       self.name = newname;
//     };
//     setname('updated');
//     console.log(self);
//   }
// };

// c.log();

let d = {
  name: 'd obj',
  log() {
    console.log(this);
    let setname = newname => {
      this.name = newname;
    };
    setname('updated');
    console.log(this);
  }
};

d.log();
