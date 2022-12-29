const user = {
  name: 'eunbin',
  age: 24,
  emails: [
    'dmsqlsdl54@naver.com',
    'dlatldhks8@naver.com'
  ]
}

// localStorage.setItem('user', JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem('user')));
// localStorage.removeItem('user');

const str = localStorage.getItem('user');
const obj = JSON.parse(str);
obj.age = 25;
console.log(obj);
localStorage.setItem('user', JSON.stringify(obj));