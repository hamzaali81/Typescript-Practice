function add2(num1: number, num2: number) {
    return num1 + num2
}

function printResult(num: number): void {
    console.log('Results', num);   
};

function addAndHandle(n1: number, n2: number, cb: (num: number)=> void) {
    const result = n1 + n2;
    cb(result)
};

addAndHandle(2,2, (result)=> {
   console.log(result);
//    return result;
   
})


// printResult(add2(2,3));


// let combineValues: Function;
let combineValues: (a: number, b: number)=> number;

combineValues = add2;
// combineValues = printResult;
// combineValues = 7;

console.log(combineValues(8,8));
