// .assign()
const userAge = {
  // key: value
  name: 'Eunbin',
  age: 24
}

const userEmail = {
  name: 'Eunbin',
  email: 'dmsqlsdl54@naver.com'
}

const target = Object.assign(userAge, userEmail);
console.log(target);  // {name: 'Eunbin', age: 24, email: 'dmsqlsdl54@naver.com'}
console.log(userAge); // {name: 'Eunbin', age: 24, email: 'dmsqlsdl54@naver.com'}
console.log(target === userAge);  // true(same memory address)

const target2 = Object.assign({}, userAge);
console.log(target2);  // {name: 'Eunbin', age: 24, email: 'dmsqlsdl54@naver.com'}
console.log(userAge); // {name: 'Eunbin', age: 24, email: 'dmsqlsdl54@naver.com'}
console.log(target2 === userAge);  // false(different memory address)

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b); // false(different memory address)



// .keys()
const user = {
  name: 'Eunbin',
  age: 24,
  email: 'dmsqlsdl54@naver.com'
}

const keys = Object.keys(user);
console.log(keys);  // ['name', 'age', 'email']

console.log(user['email']); // dmsqlsdl54@naver.com

const values = keys.map(key => user[key])
console.log(values);  // ['Eunbin', 24, 'dmsqlsdl54@naver.com']