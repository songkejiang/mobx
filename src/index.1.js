function Animal() {}

function Dog () {}

Object.defineProperties(Animal.prototype, 'name', {
        value() {
            return 'Animal'
        }
})
Object.defineProperties(Animal.prototype, 'say', {
    value() {
        return `I am ${this.name()}`
    }
})
Dog.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Dog,
        enumberable: false
    },
    name: {
        value() {
            return 'Dog'
        }
    },
})

document.write(new Dog().say())
// console.log(Dog.prototype.constructor)

// class Animal {
//     name() {
//         return 'Animal'
//     }
//     say() {
//         return `I am ${this.name()}`
//     }
// }

// class Dog extends Animal{
//     constructor () {
//         super()
//     }
//     food = 'bone'
//     name() {
//         return this.food
//     }
// }
// console.log(new Dog().food)
// console.log(new Dog().say())