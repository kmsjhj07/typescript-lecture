var string = 'Hello, world!';
var number = 42;
// const bigInt: bigint = 9007199254740991n;
var boolean = true;
var nullType = null;
var undefineType = undefined;
var anyType = 'This can be anything';
var array = [true, false];
// 자바스크립트 코드는 camelCase로 작성합니다.
var letValue = 'Hello, Typescript';
var Role;

(function (Role) {
  Role['ADMIN'] = 'admin';
  Role['USER'] = 'user';
  Role['GUEST'] = 'guest';
  // ... X
})(Role || (Role = {}));

var someUserRole = Role.ADMIN;
console.log(someUserRole);
// const object = {
//   name: 'John Doe',
//   age: 30,
//   isEmployed: true,
//   hobbies: ['reading', 'gaming', 'coding'],
//   address: {
//     street: '123 Main St',
//   },
// };
// const date = new Date(1585701932000);
// console.log(date.toString());
// TODO: 2025-03-15 ~ 2025-04-16 사이의 날짜가 며칠 차이인지 계산해서
// TODO: console.log()로 띄우세요.
// ? 힌트: 1초 = 1000ms => 1000, 1분 60 * 1000, 1시간 60 * 60 * 1000
// ? 타임스탬프를 구하는 메소드는 getTime();
// const startTime = new Date('2025-03-15').getTime();
// const endTime = new Date('2025-04-16').getTime();
// const diffTime = endTime - startTime;
// const diffDays = diffTime / (1000 * 60 * 60 * 24);
// console.log(diffDays);
// console.log(new Date().toISOString());
// console.log(new Date().toISOString());
