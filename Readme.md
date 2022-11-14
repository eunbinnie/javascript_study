# JavaScript

#### 할당 연산자(assignment operator)

- const : 값 재할당 불가
- let : 값 재할당 가능

```js
let a = 2
a += 1

const b = 5
```

#### 비교 연산자(comparison operator)

- === : 일치 연산자
- !== : 불일치 연산자

```js
const b = 1
const c = 3

console.log(b === c)  // false
console.log(b !== c)  // true
```

#### 논리 연산자(logical operator)

- and 연산자(&&) : 모든 값이 true일 경우 true(하나 이상 false일 경우 false값)
- or 연산자(||) : 하나 이상 true일 경우 true값
- not 연산자(!) : 반대 값 출력

```js
const x = 1 === 1
const y = 'AB' === 'ABC'
const z = false

console.log('&&: ', x && y && z)  // &&: false
console.log('||: ', x || y || z)  // ||: true
console.log('!: ', !y)  // !: true
```

#### 삼항 연산자(ternary operator)

물음표(?) 앞의 값이 true이면 콜론(:)앞의 내용 출력 false이면 뒤의 내용 출력

```js
const d = 1 < 2

console.log(d ? '참' : '거짓')  // 참
```

#### 변수 유효범위(Variable Scope)
- var : function level 유효 범위
- let, const : block level 유효 범위

```js
function scope() {
  if (true) {
    const j = 123
    console.log(j)  // 123

    var z = 55  // 55
  }
  console.log(z)
}
scope()
```

#### 형 변환(Type conversion)

- Truthy(참과 같은 값) : true, {}, [], 1, 2, 'false', -12, '3.14' ...
- Falsy(거짓과 같은 값) : false, '', null, undefined, 0, -0, NaN

```js
if (0) {
  console.log(123)  // 출력 안 됨
}
```

---

#### 함수 복습

###### function 함수이름(매개변수) {}

```js
function sum(x, y) {
  if (x < 1) {
    return 123
  }
  return x + y
}

const a = sum(1, 3) // a = 4
console.log(a)  // 4
```

#### arguments 사용(매개변수 X)

```js
function div() {
  console.log(arguments)
  return arguments[0] - arguments[1]  // arguments[0] = 7, arguments[1] = 3
}

console.log(div(7, 3))  // 4
```


#### 익명 함수 (함수 이름 없음)

```js
const i = 5
const j = function () {
  console.log(i / 2)
}

j() // 2.5
```


#### 화살표 함수
###### () => {} vs function () {}

```js
const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))  // double: 14

/*
매개변수 하나일 경우에만 소괄호 생략 가능
const doubleArrow = (x , y) => { x * y }
*/

const doubleArrow = x => ({ name: 'Heropy' })
console.log('doubleArrow', doubleArrow(7))
```


#### 즉시실행함수 (IIFE, Immediately-Invoked Function Expression)
###### (function () {} )()  OR  (function () {} ())

```js
const b = 7
function doubleI() {
  console.log(b * 2)
}
doubleI();

(function () {
  console.log(b * 2)  // 14
})();

(function () {
  console.log(b * 2)  // 14
}());
```


#### 호이스팅(Hoisting)
###### 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

```js
const c = 7

doubleH()

function doubleH() {
  console.log(c * 3)
}
```



#### 타이머 함수
- __setTimeout(함수, 시간):__ 일정 시간(ms) 후 함수 실행
```js
const timer = setTimeout(() => {
  console.log('Eunbin!')
}, 3000)
```  
- __setInterval(함수, 시간):__ 시간 간격마다 함수 실행
```js
const timer = setInterval(() => {
  console.log('Eunbin!')
}, 3000)
```  
- __clearTimeout():__ 설정된 Timeout 함수를 종료
``` js
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})
```  

- __clearInterval():__ 설정된 Interval 함수를 종료
``` js
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})
```  

#### 콜백(Callback)
###### 함수의 인수로 사용되는 함수

``` js
function timeout(cb) {
  setTimeout(() => {
    console.log('Lee eunbin')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})
```