// let userInput: unknown;

// let username: string;

// userInput = 3;
// userInput = 'Max';

// if(typeof userInput === 'string'){
//     username = userInput;
// };

function generateError(message: string, code: number):never {
    throw {message: message, errorCode: code}
}

generateError('An error occurred!', 500);
// const result2 = generateError('An error occurred!', 500);
// console.log(result2);
