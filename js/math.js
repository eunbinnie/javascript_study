const pi = 3.14159265358979;
console.log(pi);

// toFixed: return string data
const str = pi.toFixed(2);
console.log(str); // 3.14
console.log(typeof str);  // string

// 형변환
const integer = parseInt(str);
const float = parseFloat(str);
console.log(integer); // 3
console.log(float); // 3.14
console.log(typeof integer, typeof float);  // number number


// Math
// abs: 절대값
console.log('abs: ', Math.abs(-12));  // 12

console.log('min: ', Math.min(2, 8)); // 2

console.log('max: ', Math.max(2, 8)); // 8

// ceil: 올림
console.log('ceil: ', Math.ceil(3.14)); // 4

// floor: 내림
console.log('floor: ', Math.floor(3.14));  // 3

// round: 반올림
console.log('round: ', Math.round(3.5)); // 4

console.log('random: ', Math.random());