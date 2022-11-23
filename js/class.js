function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// 생성자 함수
const eunbin = new User('Eunbin', 'Lee')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(eunbin.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())


// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

function Person(name) {
  this.name = name
}
Person.prototype.normal = function () {
  console.log(this.name)
}
Person.prototype.arrow = () => {
  console.log(this.name)
}

const heropy = new Person('Heropy')

heropy.normal()
heropy.arrow()


const timer = {
  name: 'Eunbin!!',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()


// ES6 Classes

const jennie = {
  name: 'Jennie',
  normal() {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
jennie.normal()
jennie.arrow()


class Info {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const lisa = new Info('Lisa', 'La')
const jisoo = new Info('Jisoo', 'Kim')
const rose = new Info('Rose', 'Park')

console.log(lisa)
console.log(jisoo.getFullName())
console.log(rose.getFullName())


// 상속(확장)
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)  // super = Vehicle
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughterBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughterBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)
console.log(myCar)
console.log(daughtersCar)