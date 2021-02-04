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

// const json = '{"x": 10, "y": 20}';
// const coordinates: {x: number, y:number} = JSON.parse(json);
// console.log(coordinates); //{x: 10, y: 20}



// Lesson 20
// 2) When we declare a variable on one line and initialize it later

// let words = ['red', 'green', 'blue'];
// let foundWord : boolean;

// for (let i=0; i<words.length; i++){
//     if(words[i] === 'green'){
//         foundWord = true;
//     }
// }

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

// const add = (a: number , b: number):number=> {
//    return a + b;
// }

//lesson 25 Void and Never 
//void doesnot return anythingt
// const logger = (message: string): void =>{
//     console.log(message);
//    return undefined; 
// }

//Never doesnot return anything
// const throwError = (message: string): never => {
//     if(!message){

//         throw new Error(message);
//     }
//     // return message;
// }

// Lesson 26
//Destucturing with Annotations

// const forecast = {
//     date: new Date(),
//     weather: 'Sunny'
// }

// const logWeather = (forecast: {date: Date, weather: string}): void =>{
//   console.log(forecast.date);
//   console.log(forecast.weather);
  
// }

// logWeather(forecast);

//Step 02 proper used
// const forecast = {
//     date: new Date(),
//     weather: 'Sunny'
// }

// const logWeather = ({date , weather}: {date: Date, weather: string}): void =>{
//   console.log(forecast.date);
//   console.log(forecast.weather);
  
// }

// logWeather(forecast);

//Lesson 27
// const profile = {
//     name: 'alex',
//     age: 21,
//     coords: {
//         lat: 0,
//         lng: 15
//     },
//     setAge(age: number): void{
//         this.age = age;
//     }
// }

// const {age, name}:{name: String, age: number} = profile

// const { 
//     coords: {lat,lng}
// }: {coords: {lat: number, lng: number}} = profile;


//Lesson 28 Array

// let carMakers: string[] = ['ford', 'toyota', 'chevy'];

// const dates = [new Date(), new Date()];
// const carsByMake = [
    //     ['hamza','ali'],
    //     ['ahmed']
    // ]
// const carsByMake: string[][] = [];

// Lesson 29
// const carMakers: string[] = ['ford', 'toyata', 'chevy'];
// const dates = [new Date(), new Date()];
// const carsByMake: string[][] = [];

// Help with inference when extracting values
// const car = carMakers[0];
// const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'

// carMakers.map((car: string):string =>{
//     return car.toUpperCase();
// })

//Lesson 30
//Flexible types

// const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
// importantDates.push('10-10-2020');


//lesson 32 Tuples in Typescript


//lesson 33 
// Tuples in Action
// const drink = {
//     color: 'brown',
//     carbonate: true,
//     sugar: 40
// };

// const pepsi: [string,boolean,number] = ['brown', true, 40];
//Type Alias
// type Drink = [string,boolean, number]
// const pepsi: Drink = ['brown', true, 40];

// const carSpecs: [number, number] = [400,332];
// const carStats = {
//     horsepower: 400,
//     weight: 332
// } 


//Lesson 36 Long Type Annotation
// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true
// }

// const printVicle = (vichle: { name: string, year: number, broken:boolean }): void =>{
//     console.log(`Name: ${vichle.name}`);
//     console.log(`Year: ${vichle.year}`);
//     console.log(`Broken? ${vichle.broken}`);
    
// }

// printVicle(oldCivic)


//Lesson 37 Fixing Long Annotations with interfaces
// interface Vichle{
//     name: string,
//     year: Date,
//     broken: boolean,
//     summary(): string;

// }

// const oldCivic = {
//     name: 'civic',
//     year: new Date(),
//     broken: true,
//     summary(): string {
//         return `Name: ${this.name}`
//     }
// }

// const printVicle = (vichle: Vichle): void =>{
//     console.log(`Name: ${vichle.name}`);
//     console.log(`Year: ${vichle.year}`);
//     console.log(`Broken? ${vichle.broken}`);
//     console.log(vichle.summary()); 
    
// }

// printVicle(oldCivic)

//Lesson 40 Code Reuse With Interfaces
// interface Reportable {
//     summary(): string
// }

// const drink = {
//    color: 'Green',
//    soda: 12,
//    sugar: 12,
//    summary(): string{
//        return `My drink has ${this.sugar} grams of sugar`
//    }    
// }

// const book = {
//     color: 'blue',
//     pages: 1212,
//     summary(): string{
//         return `My book is Holy Quran`
//     }    
//  }
 
// const printVicle = (report: Reportable):void =>{
//     console.log(report.summary());
    
// }
// printVicle(drink);
// printVicle(book);

//Lesson 41 General Plan With Interfaces

//Lesson 42 classes
// class Deep {

//     hook(): void{
//     console.log('beep');
    
//     }
//      foo(): void{
//      console.log('OK!');
     
//      }
// }

// const vechicle= new Deep();

// vechicle.hook();
// vechicle.foo();

//Lesson 43 Basic Inheritance 

// class Deep {

//     hook(): void{
//     console.log('beep');
    
//     }
//      foo(): void{
//      console.log('OK!');
     
//      }
// }

// class Car extends Deep {
//     hook(): void{
//     console.log('Vroom');
// }
// }

// const vechicle= new Deep();
// const car = new Car();
// vechicle.hook();
// vechicle.foo();
// car.hook();

//Lesson 44
// Instance Method Modifiers
//public private protected
// class Deep {
//     // hook(): void{
//     // console.log('beep'); 
//     // }
//     protected kook(): void{
//         console.log('beep'); 
//         }
//     public foo(): void{
//      console.log('OK!');   
//      }
// }

// class Car extends Deep {
//    private hook(): void{
//     console.log('Vroom');
// }
//    poo(): void{
//     this.hook();
//     this.kook();
// }
// }

// const vechicle= new Deep();
// const car = new Car();

// // vechicle.hook();
// vechicle.foo();
// // car.hook();
// car.poo();

//Lesson 45 Fields in Classes


// class Deep {
//     // hook(): void{
//     // console.log('beep'); 
//     // }
//     protected kook(): void{
//         console.log('beep'); 
//         }
//     public foo(): void{
//      console.log('OK!');   
//      }
// }

// class Car extends Deep {
//    private hook(): void{
//     console.log('Vroom');
// }
//    poo(): void{
//     this.hook();
//     this.kook();
// }
// }

// const vechicle= new Deep();
// const car = new Car();

// // vechicle.hook();
// vechicle.foo();
// // car.hook();
// car.poo();
// // car.kook();

//Lesson 45 Fields in classes


class Deep {
//     cricket: string;
//    constructor(cricket: string){
//    this.cricket = cricket;
//     console.log(cricket);

//    }
// constructor(public cricket: string){

//  console.log(cricket);

// }
//     color: string= 'red';
//     protected kook(): void{
//         console.log('beep'); 
//         }
//     public foo(): void{
//      console.log('OK!');   
//      }
// }

// class Car extends Deep {
//    private hook(): void{
//     console.log('Vroom');
// }
//    poo(): void{
//     this.hook();
//     this.kook();
// }
// }

// const vechicle= new Deep('PsL');
// // const car = new Car();
// console.log(vechicle.cricket);

// // vechicle.hook();
// vechicle.foo();
// car.hook();
// car.poo();
// car.kook();

//Lesson 46 Fields with inheritance

// constructor(public cricket: string){

//     console.log(cricket);
   
//    }
//        color: string= 'red';
//        protected kook(): void{
//            console.log('beep'); 
//            }
//        public foo(): void{
//         console.log('OK!');   
//         }
//    }
   
//    class Car extends Deep {
//     constructor(public wheels: number,public color: string){
//         super(color);
//         console.log(wheels,color);
        
//     }  
    
//     private hook(): void{
//        console.log('Vroom');
//    }
//       poo(): void{
//        this.hook();
//        this.kook();
//    }
//    }
   
//    const vechicle= new Deep('PsL');
//    const car = new Car(4,'blue');
//    console.log(vechicle.cricket);
   
//    // vechicle.hook();
//    vechicle.foo();

//Lesson 48
constructor(public cricket: string){

    console.log(cricket);
   
   }
       color: string= 'red';
       protected kook(): void{
           console.log('beep'); 
           }
       public foo(): void{
        console.log('OK!');   
        }
   }
   
   class Car extends Deep {
    constructor(public wheels: number,public color: string){
        super(color);
        console.log(wheels,color);
        
    }  
    
    private hook(): void{
       console.log('Vroom');
   }
      poo(): void{
       this.hook();
       this.kook();
   }
   }
   
   const vechicle= new Deep('PsL');
   const car = new Car(4,'blue');
   console.log(vechicle.cricket);
   
   // vechicle.hook();
   vechicle.foo();
   

































































































