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