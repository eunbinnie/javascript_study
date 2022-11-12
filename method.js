// 함수 복습

function sum(x, y) {
  if (x < 2) {
    return 123
  }
  return x + y
}

const a = sum(1, 3)
console.log(a)

// arguments 사용(매개변수 X)

function div() {
  console.log(arguments)
  return arguments[0] - arguments[1]
}

console.log(div(7, 3))


// 익명 함수

const i = 5
const j = function () {
  console.log(i / 2)
}

j()


// 화살표 함수
// () => {} vs function () {}

const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

/*
매개변수 하나일 경우에만 소괄호 생략 가능
const doubleArrow = (x , y) => x * y
*/

const doubleArrow = x => ({ name: 'Heropy' })
console.log('doubleArrow', doubleArrow(7))


// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const b = 7
function doubleI() {
  console.log(b * 2)
}
doubleI();

(function () {
  console.log(b * 2)
})();

(function () {
  console.log(b * 2)
}());


// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const c = 7

doubleH()

function doubleH() {
  console.log(c * 3)
}


/**
 * 타이머 함수
 * setTimeout(함수, 시간): 일정 시간(ms) 후 함수 실행
 * setInterval(함수, 시간): 시간 간격마다 함수 실행
 * clearTimeout(): 설정된 Timeout 함수를 종료
 * clearInterval(): 설정된 Interval 함수를 종료
 */

// const timer = setTimeout(() => {
//   console.log('Eunbin!')
// }, 3000)

const timer = setInterval(() => {
  console.log('Eunbin!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  // clearTimeout(timer)
  clearInterval(timer)
})


// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout("함수", 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log('Lee eunbin')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})