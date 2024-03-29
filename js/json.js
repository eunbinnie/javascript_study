// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = true;
console.log(json);
json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = rabbit;
console.log(json);
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// 콜백함수 이용
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'eunbin' : value;
})
console.log(json);


// 2. JSON to Object
// parse(json)
console.log('============');
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();  // 얘는 tori can jump! 라고 나와야하는 거 아닌가?
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());