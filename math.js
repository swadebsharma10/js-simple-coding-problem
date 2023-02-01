// find out the result 3 to the power 8.
// find out the result 5 to the power 5.
// find out the result 10 to the power 10.

const result = Math.pow(3, 8);
const result2 = Math.pow(5, 5);
const result3 = Math.pow(10, 5);
// console.log(result3);


// Two persons gap have been 10yrs/ 5yrs.so that they will become friend.

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 -num2);
console.log(gap);

if (gap <5){
    console.log('You guys can be friend');
}
else{
    console.log('You guys stay a part');
}



// Make a Fraction number to a Integer Number;
const number = 2.55766;
const fullNumber = Math.round(number);
console.log(fullNumber);

// We can do it 2 ways. ceil..Floor
const num3 = 2.14535355;
const numResult = Math.ceil(num3);
console.log(numResult);

const num4 = 4.57874879;
const num4Result = Math.floor(num4);
console.log(num4Result);
