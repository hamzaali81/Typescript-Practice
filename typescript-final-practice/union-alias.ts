// function add(input : string | number) {
//     console.log(input);
    
// };

// add(2);

// Type Aliasing
type Combinable = number | string;
type ConversionText = 'hamza' | 'kabeer';

function add(input: Combinable, input2: ConversionText) {
    console.log(input);   
    console.log(input2);   
};

add(2, 'hamza');