"use strict";
// Mosh
// Type Annotations
// Arrow functions
// Interface       
// Classes  
// Constructors
// Access Modifiers
// Properties
// Modules
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1,true,'a',false];
// // enum
// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue = 2;
// Aliasing in typescript
// enum Color {Red = 0, Green = 1, Yellow = 2};
// let backgroundColor = Color.Red;
// console.log(backgroundColor);
// // Type Annotation
// let message = 'abc';
// let endWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// console.log(message);
// Interface use call naming convention 
// Cohesion (part of one unit)
// interface Point {
//     x: number,
//     y: number,
//     draw: (point) => void
// }
// let drawPoint = (point: Point) => {
//     // ..
// }
// let getDistance = (pointA : Point, pointB: Point) =>{ 
//     // ..
// }
// drawPoint({
//     x: 1,
//     y: 2
// });
// Classes 
class Point {
    //    private x?: number;
    //    protected y?: number;
    // constructor(private x?: number,protected y?: number){
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X:', this.x);
    }
}
let point = new Point();
// let point = new Point(1,2);
point.x = 1;
console.log(point.x);
point.y = 2;
console.log(point.y);
point.draw();
