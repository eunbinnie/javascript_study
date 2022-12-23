// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Eunbin',
  age: 24,
  email: 'dmsqlsdl54@naver.com',
  address: 'USA'
}
const { name: eunbin, age, address = 'Korea' } = user;
// E.g, user.address

console.log(`사용자의 이름은 ${eunbin}입니다.`);
console.log(`${eunbin}의 나이는 ${age}세 입니다.`);
console.log(`${eunbin}의 이메일 주소는 ${user.email}입니다.`);
console.log(address); // USA

const fruits = ['Apple', 'Banana', 'Cherry'];
const [a, b, c, d] = fruits;
console.log(a, b, c, d);  // Apple Banana Cherry undefined

const [, , i] = fruits;
console.log(i); // Cherry