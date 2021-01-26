const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

/////////////////////////////////////////////////////////////

const square = element => element * element;

// const result = numbers.map(function(element){
//     return element * element;

// })
const result = numbers.map(element => element * element);
console.log(result);

//filter//////////////////////////////////////////////////////////

const bigger = numbers.filter(element => element >5);
const isThere = numbers.find(element => element >5 );

console.log(bigger);
console.log(isThere);

