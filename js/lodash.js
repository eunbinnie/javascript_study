import _ from 'lodash'


// uniqBy vs unionBy
{

  const usersA = [
    { userId: '1', name: 'EUNBIN' },
    { userId: '2', name: 'YOUNGK' }
  ]

  const usersB = [
    { userId: '1', name: 'EUNBIN' },
    { userId: '3', name: 'JENNIE' }
  ]

  // uniqBy: 하나의 배열에서 고유화
  const usersC = usersA.concat(usersB);
  console.log('concat', usersC);
  console.log('uniqBy', _.uniqBy(usersC, 'userId'));

  // unionBy: 여러개 배열을 합칠 때 고유화 작업
  const usersD = _.unionBy(usersA, usersB, 'userId');
  console.log('unionBy', usersD);

}

console.log('====================================');


// find vs findIndex, remove

{

  const users = [
    { usersId: '1', name: 'eunbin' },
    { usersId: '2', name: 'jennie' },
    { usersId: '3', name: 'lisa' },
    { usersId: '4', name: 'son' },
    { usersId: '5', name: 'hani' }
  ]

  const foundUser = _.find(users, { name: 'lisa' });
  const foundUserIndex = _.findIndex(users, { name: 'lisa' });
  console.log(foundUser);
  console.log(foundUserIndex);

  _.remove(users, { name: 'eunbin' });
  console.log(users);

}