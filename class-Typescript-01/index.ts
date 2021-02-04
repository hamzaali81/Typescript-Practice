//Lesson 04 
import axios from 'axios';

// const url = '';

// axios.get(url)
// .then((response) => {
//     console.log(response.data)
// })

//Lesson 05

// const url = '';

// axios.get(url)
// .then((response) => {
//     const todo = response.data;

//     const ID = todo.ID;
//     const title = todo.Title;
//     const finished = todo.finished;
    
//     console.log(`
//     The Todo ID: ${ID}
//     Has a title of ${title}
//     Is it finished? ${finished}
//     `);  

// })

//lesson 06
// const url = '';

// interface Todo {
//     id: number;
//     title: string;
//     completed: boolean
// }

// axios.get(url)
// .then((response) => {
//     //Response.data has properties of:
//     // id
//     // title
//     // completed
//     const todo = response.data as Todo;

//     const id = todo.id;
//     const title = todo.title;
//     // const finished = todo.finished;  error test
//     const completed = todo.completed;
    
//     console.log(`
//     The Todo ID: ${id}
//     Has a title of ${title}
//     Is it finished? ${completed}
//     `);  

// })

//lesson 07

// const url = '';

// interface Todo {
//     id: number;
//     title: string;
//     completed: boolean
// }

// axios.get(url)
// .then((response) => {
//     //Response.data has properties of:
//     // id
//     // title
//     // completed
//     const todo = response.data as Todo;

//     const id = todo.id;
//     const title = todo.title;
//     // const finished = todo.finished;  error test
//     const completed = todo.completed;
    
//     // logTodo(id, completed, title);
//     logTodo(id, title, completed);
// })


// const logTodo = (id: number, title: string, completed: boolean)=>{
//     console.log(`
//     The Todo ID: ${id}
//     Has a title of ${title}
//     Is it finished? ${completed}
//     `);  
// }


//Lesson 11

// const today  = new Date();

// today.getMonth();

// const person = {
//     age: 20
// };

// class Color {};
// const red = new Color();

//lesson 14 (Annotations)
//01 Variables

// let apples: number = 5;
// let speed: string = 'fast';
// let hasName: boolean = true;;

// let nothingMuch: null= null;
// let nothing: undefined = undefined 

// build in objects

// let now: Date = new Date();

//Lesson 15 Annotations Around Functions
//Array
// let colors: string[] = ['red','yellow','green'];
// let myNumbers: number[] = [1,2,3];
// let truths: boolean[]=[true,false,true]
// Classes 
// class Car{}
// let car: Car = new Car();
// Object literal
// let point: { x: number,y: string } = {
//     x: 10,
//     y: 'hamza'
// }

//02 Functions
// void not return any

// const logNumber : (i: number) => void = (i: number) =>{
//     console.log(i);
    
// }


//lesson 17 Understanding Inference

// let apple ;
// apple = 4;

// lesson 18 'Any Type'
//When to use annotations
//1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y:number} = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}



// Lesson 20
// 2) When we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord : boolean;

for (let i=0; i<words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

//lesson 21
//3) Variable whose type cannot be inferred correctly

// let numbers = [-10,-1,3];

// let numberAboveZero: boolean | number = false;

// for (let i=0;i<numbers.length;i++){
//     if(numbers[i]> 0){
//         numberAboveZero = numbers[i]; 
//     }
// }
//Lesson 22
//Annotation around functions

const add = (a: number , b: number):number {
   return a + b;
}


































































