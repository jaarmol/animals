function Animal (name) {
    this.name = name
  }
  
  Animal.prototype.speak = function () {
    console.log('Missing Implementation');
  }

  Animal.prototype.getName = function () {
    console.log(`${this.name} `);
  }
  
  class Dog extends Animal {
    speak() {
      console.log(this.name + ': how how!');
    }
    getName() {
        console.log('This is ' + this.name)
    }
}

    class Cow extends Animal {
        speak() {
          console.log(this.name + ': Muuuu!');
        }
        getName() {
            console.log('This is ' + this.name)
        }
      }
  
let newAnimal = new Animal ()
// newAnimal.speak(); => spr met. speak
newAnimal.getName()

let dogMax = new Dog('Max')
// dogMax.speak();
dogMax.getName() 

let cowMarie = new Cow('Marie')
// cowMarie.speak();
cowMarie.getName() 