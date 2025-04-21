// import dayjs from 'dayjs';
// import fs from 'fs/promises';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  return todos as Todo[];
};

const main = async () => {
  // TODO: fetchTodos를 통해 반환받은 데이터에서 배열의 todo 중 title 일치 확인하여 id 출력
  const result = await fetchTodos();

  const title = 'velit soluta adipisci molestias reiciendis harum';
  const todo = result.find((item) => item.title === title);
  if (todo) {
    console.log('id:', todo.id);
  } else {
    console.log('Todo not found');
  }
};

main();

//
//
//
// interface User {
//   id: string; // 중복 되면 안됨
//   name: string;
//   age: number;
//   isAdmin: boolean;
// }

// const saveUser = async (user: User) => {
//   // users 초기화
//   let jsonString: string;
//   try {
//     jsonString = await fs.readFile('users.json', 'utf-8');
//     console.log(jsonString);
//   } catch (error) {
//     console.error('error', error);
//     jsonString = JSON.stringify({ users: [] });
//   }
//   const data = JSON.parse(jsonString) as { users: User[] };
//   console.log('data', data);

//   // users 배열에서 user id 중복체크
//   const userExists = data.users.some((item: User) => item.id === user.id);
//   if (userExists) {
//     throw new Error('User already exists');
//   }

//   // users 배열에 user 추가
//   data.users.push(user);
//   console.log('data', data);

//   await fs.writeFile('users.json', JSON.stringify(data));
// };

// const main = async () => {
//   const users = [
//     {
//       id: 'kim',
//       name: 'kim',
//       age: 20,
//       isAdmin: false,
//     },
//     {
//       id: 'lee',
//       name: 'lee',
//       age: 30,
//       isAdmin: true,
//     },
//     {
//       id: 'park',
//       name: 'park',
//       age: 40,
//       isAdmin: false,
//     },
//   ];
//   for (let i = 0; i < users.length; i++) {
//     await saveUser(users[i]);
//   }
// };

// main();

//
//
//
// enum Category {
//   FRUIT = 'fruit',
//   VEGETABLE = 'vegetable',
//   ACCESSORY = 'accessory',
// }

// interface Item {
//   name: string;
//   category: Category;
//   price: number;
//   quantity: number;
// }

// const apple: Item = {
//   name: 'apple',
//   category: Category.FRUIT,
//   price: 100,
//   quantity: 3,
// };

// const onion: Item = {
//   name: 'onion',
//   category: Category.VEGETABLE,
//   price: 50,
//   quantity: 2,
// };

// const watch: Item = {
//   name: 'watch',
//   category: Category.ACCESSORY,
//   price: 1000,
//   quantity: 1,
// };

// const cart: Item[] = [apple, onion, watch];

// const calcTotal = (items: Item[]) => {
//   let totalPrice = 0;
//   items.forEach((item) => {
//     if (item.category !== Category.FRUIT) {
//       totalPrice += item.price * item.quantity;
//     }
//   });
//   return totalPrice;
// };

// const total = calcTotal(cart);
// console.log('total:', total);

//
//
//
// TODO: 장바구니의 각 상품 타입정의하고, cart 배열에도 타입 부여하여 상품을 3개이상 추가
// TODO: calcTotal 함수를 만들고 실행하여 지불해야할 총 금액을 계산하여 total에 저장하여 확인

// interface Item {
//   name: string;
//   category: string;
//   price: number;
//   quantity: number;
// }

// const apple: Item = {
//   name: 'apple',
//   category: 'fruit',
//   price: 100,
//   quantity: 3,
// };

// const onion: Item = {
//   name: 'onion',
//   category: 'vegetable',
//   price: 50,
//   quantity: 2,
// };

// const watch: Item = {
//   name: 'watch',
//   category: 'accessory',
//   price: 100000,
//   quantity: 1,
// };

// const cart: Item[] = [apple, onion, watch];

// const calcTotal = (items: Item[]) => {
//   let totalPrice = 0;
//   items.forEach((item) => {
//     totalPrice += item.price * item.quantity;
//   });
//   return totalPrice;
// };

// const total = calcTotal(cart);
// console.log('total:', total);

//
//
//
// const someSchedule = {
//   study: '2025-04-03',
//   election: '2025-06-03',
//   trip: '2025-08-01',
// };

// TODO: 날짜 포맷..
// const formatDate = (date: Date) => {
//   const day = dayjs(date);
//   return day.format('YYYY.MM.DD');
// };

// someSchedule.study = formatDate(new Date(someSchedule.study));
// someSchedule.election = formatDate(new Date(someSchedule.election));
// someSchedule.trip = formatDate(new Date(someSchedule.trip));

// console.log(someSchedule);
