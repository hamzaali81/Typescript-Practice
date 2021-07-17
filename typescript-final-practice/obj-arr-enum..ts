// const person: {
//     name: string;
//     age: number;
//     arr: number[];
//     arr2:  [number, string]
// } = {
//    name: "hamza",
//    age: 23,
//    arr: [21,23],
//    arr2: ['hamza', 2]
// }
// const ADMIN = 0;(enum solution)
// const SUPERVISOR = 1;(enum solution)
// const AUTHOR = 2;(enum solution)

enum Role { ADMIN = 0, SUPERVISOR = 1, AUTHOR=2 };

const person = {
   name: "hamza",
   age: 23,
   arr: [21,23],
   arr2: ['hamza', 2],
//    role: ADMIN
   role: Role.ADMIN
}
console.log(person.name); 