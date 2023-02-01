// Between two variable we can exchange the value
// by  using a Tempu...

let first = 5;
let second = 7;
console.log(first,second);

// approach-1
let temp = first;
first = second;
second= temp;

// // approach-2
// [first, second] = [ second, first];

console.log(first, second);