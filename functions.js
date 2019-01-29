var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    var fullname = this.firstname + this.lastname;
    return fullname;
  }
};

var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

//* Function Currying


function multiply(a,b) {
  return a * b;
}

var multiplyByTwo = multiply.bind(this, 8);

console.log(multiplyByTwo(4));
