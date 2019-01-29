// (function buildFunctions() {

//   let arr = [];

//   for (let i = 0; i < 3; i++) {
//     arr.push(
//     (function() {
//         console.log(i);
//       }())
//     )
//   }
//   return arr;
// }())

// function makeGreeting(language) {
//   return function(firstname, lastname) {
//     if (language === 'en') {
//       console.log(`${firstname}${lastname} FIRST` )
//     }
//     if (language === 'es') {
//       console.log(`${firstname}${lastname} SECOND` )
//     }
//   }
// }

// var greetEnglish = makeGreeting('en');
// var greetSpanish = makeGreeting('es');

// greetEnglish('hh', 'd');
// greetSpanish('j', 'sss')

function sayHiLater() {
  var greeting = 'Hi!';
  setTimeout(() => {
    console.log(greeting)
  }, 3000)
}

sayHiLater();


function tellMeWhenDone(cb) {
  var a = 1000;
  var b = 2000;
  cb();
}

tellMeWhenDone(function() {
  console.log('I am done!');
})
tellMeWhenDone(function() {
  console.log('dfs');
})
