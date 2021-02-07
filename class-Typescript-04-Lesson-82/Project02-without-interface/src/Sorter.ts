//Lesson 74 Sorter Scaffolding
//Lesson 75 Sorting Implentation

import { NumbersCollection } from './NumbersCollection';
export default class Sorter {
    // constructor(public collection: number[] | string){
        constructor(public collection: NumbersCollection){

    }
    sort(): void {
    const { length } = this.collection; 
    for(let i=0; i<length;i++){
        // If collection is an array of numbers
        for (let j=0;j<length - i - 1;j++){
// if(this.collection instanceof LinkedList){
    if(this.collection.compare(j, j+1)){
        // const leftHand = this.collection[j];
        // this.collection[j] = this.collection[j+1];
        // this.collection[j+1] = leftHand;
        this.collection.swap(j, j+1)
    }
    
}

         
            // if(this.collection instanceof Array){
            //     // collection  === number
            //     if (this.collection[j] > this.collection[j+1]){
            //         const leftHand = this.collection[j];
            //         this.collection[j] = this.collection[j+1];
            //         this.collection[j+1] = leftHand;
            //     }
            // }
            // // If collection is string either consider do this logic instead
            // ~ and logic compare a swp character instead:
            // ~~~logic to compare and swap characters in a string

        }
    }   
    }

