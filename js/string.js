// JS 데이터

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: { }


// String.prototype.indexOf()
{
  const result = 'Hello world!'.indexOf('world');
  console.log(result);  // 6

  const result2 = 'javascript programming'.indexOf('eunbin');
  console.log(result2); // -1(일치하는 값 없음)
}


{
  const str = '0123';

  console.log(str.length);  // 4
  console.log('01 23'.length); // 5
}


{
  const str = 'Hello world!';

  console.log(str.indexOf('eunbin') !== -1);  // false

  // slice: 첫번째 매개변수부터 두번째 매개변수 전까지 추출
  console.log(str.slice(6, 11));  // world

  // replace: 문자 데이터 교체
  console.log(str.replace(' world!', ''));  // Hello
}


{
  const str = 'dmsqlsdl54@naver.com';

  // ? 정규표현식
  console.log(str.match(/.+(?=@)/)[0]); // dmsqlsdl54
}


{
  const str = '    Hello world  ';

  // trim: 앞,뒤 공백 제거
  console.log(str.trim());  // Hello world
}