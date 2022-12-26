// 데이터 불변성(Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null(불변성: 생김새 비교)
// 참조형 데이터: Object, Array, Function(가변성: 메모리 비교)

// 원시 데이터
{

  let a = 1;
  let b = 4;
  console.log(a, b, a === b); // false
  b = a;
  console.log(a, b, a === b); // true
  a = 7;
  console.log(a, b, a === b); // false
  let c = 1;
  console.log(b, c, b === c); // true

}


// 참조형 데이터 Object(메모리 주소도 비교해야 함)
{

  let a = { k: 1 };
  let b = { k: 1 };
  console.log(a, b, a === b); // all 1, false
  a.k = 7;
  b = a;  // 같은 주소 가리킴
  console.log(a, b, a === b); // all 7, true
  a.k = 2;
  console.log(a, b, a === b); // all 2, true
  let c = b;
  console.log(a, b, c, a === c);  // all 2, true
  a.k = 9;
  console.log(a, b, c, a === c);  // all 9, true

  console.log('------');

}


// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)

// 1. object assign
{

  const user = {
    name: 'Eunbin',
    age: 24,
    emails: ['dmsqlsdl54@naver.com']
  }

  const copyUser = Object.assign({}, user);  // new object data(copy)
  console.log(copyUser === user); // false

  user.age = 25;
  console.log('user', user);  // age: 25
  console.log('copyUser', copyUser); // age: 24

  console.log('------');
  console.log('------');

}

// 2. 얕은 복사(Shallow copy)
{

  const user = {
    name: 'Eunbin',
    age: 24,
    emails: ['dmsqlsdl54@naver.com']
  }
  const copyUser = { ...user };
  console.log(copyUser === user); // false

  user.age = 25;
  console.log('user', user);  // age: 25
  console.log('copyUser', copyUser); // age: 24

  console.log('------');
  console.log('------');

}

// 3. 깊은 복사(Deep copy)
{

  const user = {
    name: 'Eunbin',
    age: 24,
    emails: ['dmsqlsdl54@naver.com']
  }
  const copyUser = { ...user };
  user.age = 25;

  console.log('------');
  console.log('------');

  user.emails.push('eunbin54@naver.com');  // 객체데이터가 push 가능,,? 오류남
  console.log(user.emails === copyUser.emails);
  console.log('user', user);  // age: 25
  console.log('copyUser', copyUser);  // age: 24

}