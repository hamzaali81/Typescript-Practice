// let str: Array<string>;

// str = ['hamza', 'ali'];

// console.log(str);

// let myVoid: void = null;
// console.log(myVoid);

// classes 

// interface UserInterface{ 
//     name: string;
//     age: number;
//     year: number;
//     func2();
// }


// class ABC implements UserInterface{
//      name: string;
//      age: number;
//      year: number;
//     // private name: string;
//     // protected age: number;
//     // public year: number;

//     constructor(name: string, age: number, year: number){
//         this.name = name;
//         this.age = age;
//         this.year = year;
//     }

//      func2() {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.year);
        
//     };

//     static func1(){
//         console.log('test function');
//     };

//     payInvoice(){
//         console.log(this.name+ ' Please pay us!'+ 'ypur age is'+ this.age );
        
//     }
// };

// class EFC extends ABC {
//     id: number;
//     constructor(name: string, age: number, year: number, id: number){
//         super(name, age, year);
//             this.id = id;
//         }
//         payInvoice(){
//             super.payInvoice(); 
//         }
//     }


// const abc = new ABC('hamza', 21, 1999);
// const efc: ABC = new EFC('hamza', 21, 1999, 21);
// console.log(abc.func2());
// efc.payInvoice()
// console.log(efc.payInvoice());

// console.log(ABC.func1());



// interface UserInterface{ 
//     name: string;
//     age: number;
//     year: number;
//     func2();
// }


// class ABC {
//     private name: string;
//     protected age: number;
//     public year: number;

//     constructor(name: string, age: number, year: number){
//         this.name = name;
//         this.age = age;
//         this.year = year;
//     }

//      func2() {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.year);
        
//     };

//     static func1(){
//         console.log('test function');
//     };

//     payInvoice(){
//         console.log(this.name+ ' Please pay us!'+ 'ypur age is'+ this.age );
        
//     }
// };

// class EFC extends ABC {
//     id: number;
//     constructor(name: string, age: number, year: number, id: number){
//         super(name, age, year);
//             this.id = id;
//         }
//         payInvoice(){
//             super.payInvoice(); 
//         }
//     }


// const abc = new ABC('hamza', 21, 1999);
// const efc: ABC = new EFC('hamza', 21, 1999, 21);
// console.log(abc.func2());
// efc.payInvoice()
// // console.log(efc.payInvoice());

// // console.log(ABC.func1());



