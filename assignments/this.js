/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding - the function is called in the global scope (looking out of window of the function house), so this refers to the window/console object.
* 2. Implicit Binding -A function is called by a preceding dot, the object to the left of the dot gets "this".
* 3. Explicit Binding - directly telling "this" what we are referring to by using .call, .apply or .bind.
* 4. New Binding - deals with constructor functions; when constructor is used "this" refers to the new object that is created and returned by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name){
    console.log(this);
    return name;
}
sayName("Mr. Meeseeks");

// Principle 2

// code example for Implicit Binding

const canDo = {
    greeting: 'Hi',
    giveGreeting: function(name){
        console.log (`${this.greeting} I'm ${name} look at me!`);
        console.log(this);
    }
};

canDo.giveGreeting("Mr. Meeseeks");

// Principle 3

// code example for New Binding
function PickleRick(greet){
    this.greeting = "I turned myself into a pickle!";
    this.greeter= greet;
    this.speak= function(){
        console.log(this.greeter + this.greeting);
        console.log(this);
    };
}

const rick = new PickleRick('Morty, ');
rick.speak();
// Principle 4

// code example for Explicit Binding

var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  person1.fullName.call(person2);