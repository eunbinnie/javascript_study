// 산술 연산자(arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)

// 할당 연산자(assignment operator)

let a = 2
// a = a + 1
a %= 1

console.log(a)

// 비교 연산자(comparison operator)

const b = 1
const c = 3

console.log(b === c) // 일치 연산자

function isEqual(x, y) {
  return x === y
}
console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

console.log(b !== c)  // 불일치 연산자

console.log(b < c)
console.log(b > c)

console.log(b >= c)
console.log(b <= c)

// 논리 연산자(logical operator)

const x = 1 === 1
const y = 'AB' === 'ABC'
const z = false

console.log(x)
console.log(y)
console.log(z)

console.log('&&: ', x && y && z)  // and 연산자(전부 true일 때 true값)
console.log('||: ', x || y || z)  // or 연산자(하나 이상 true일 때 true값)
console.log('!: ', !y)  // 부정(not) 연산자 (반대 값 출력)

// 삼항 연산자(ternary operator)

const d = 1 < 2

if (d) {
  console.log('참')
} else {
  console.log('거짓')
}

// 물음표(?) 앞의 값이 true이면
// 콜론(:)앞의 내용 출력
// false이면 뒤의 내용 출력

console.log(d ? '참' : '거짓')

import random from './getRandom'

// 조건문 (If statement)

console.log(random())

const e = random()

if (e === 0) {
  console.log('e is 0')
} else if (e === 2) {
  console.log('e is 2')
} else if (e === 4) {
  console.log('e is 4')
} else {
  console.log('rest...')
}

// 조건문 (Switch statement)

switch (e) {
  case 0:
    console.log('e is 0')
    break
  case 2:
    console.log('e is 2')
    break
  case 4:
    console.log('e is 4')
    break
  default:
    console.log('rest...')
}

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

// 변수 유효범위(Variable Scope)
// var : function level 유효 범위
// let, const : block level 유효 범위

function scope() {
  if (true) {
    const j = 123
    console.log(j)

    var z = 55
  }
  console.log(z)
}
scope()

// 형 변환(Type conversion)

// Truthy(참과 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓과 같은 값)
// false, '', null, undefined, 0, -0, NaN

if (0) {
  console.log(123)
}