{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  console.log(numbers[1]);  // 2
  console.log(fruits[2]); // Cherry
}


// .length
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  console.log(numbers.length);  // 4
  console.log(fruits.length); // 3
  console.log([1, 2].length); // 2

  console.log([].length); // 0
}


// .concat(원본 수정 x)
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  console.log(numbers.concat(fruits));  // [1, 2, 3, 4, 'Apple', 'Banana', 'Cherry]
  console.log(numbers); // [1, 2, 3, 4]
  console.log(fruits);  // ['Apple', 'Banana', 'Cherry']
}


// .forEach()
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  fruits.forEach(function (element, index) {
    console.log(element, index);
  })

  fruits.forEach(function (fruit, i) {
    console.log(fruit, i);
  })
  // Apple 0
  // Banana 1
  // Cherry 2
}


// .map() === return new array
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  const a = fruits.forEach((fruit, index) => {
    console.log(`${fruit}-${index}`)
  })
  console.log(a); // undefined

  const b = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
  }))
  console.log(b);
  // [{id: 0, name: 'Apple'},
  // {id: 1, name: 'Banana'},
  // {id: 2, name: 'Cherry'}]
}


// .filter() === return filtering array
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  const a = numbers.map(number => number < 3)
  console.log(a); // [true, true, false, false]

  const b = numbers.filter(number => number < 3)
  console.log(b); // [1, 2]

  console.log(numbers); // [1, 2, 3, 4]
}


// .find() .findIndex()
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  const a = fruits.find(fruit => /^C/.test(fruit))
  console.log(a); // Cherry

  const b = fruits.findIndex(fruit => /^C/.test(fruit))
  console.log(b); // 2
}


// .includes()
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  const a = numbers.includes(3);
  console.log(a); // true

  const b = fruits.includes('melon');
  console.log(b); // false
}


// push() unshift()
// 주의! 원본 수정됨
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  numbers.push(5);
  console.log(numbers); // [1, 2, 3, 4, 5]

  numbers.unshift(0);
  console.log(numbers); // [0, 1, 2, 3, 4, 5]
}


// .reverse()
// 주의! 원본 수정됨
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  numbers.reverse();
  fruits.reverse();

  console.log(numbers); // [4, 3, 2, 1]
  console.log(fruits);  // ['Cherry', 'Banana', 'Apple']
}


// .splice(index, remove number)
// 주의! 원본 수정됨
{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  numbers.splice(2, 2); // 두번째 아이템부터 두개 지워라

  console.log(numbers); // [1, 2]
}

{
  const numbers = [1, 2, 3, 4];
  const fruits = ['Apple', 'Banana', 'Cherry'];

  numbers.splice(2, 1, 99); // item 지우고 new item 끼워넣기

  console.log(numbers); // [1, 2, 999, 4]

  fruits.splice(2, 0, 'Orange');

  console.log(fruits);  // ['Apple', 'Banana', 'Orange', 'Cherry']
}