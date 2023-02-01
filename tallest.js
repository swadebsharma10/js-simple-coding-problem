// Find out who is tallest???
// input(157, 134, 188) and (167, 190,120, 165, 137).

function maxInArray(numbers){
    let largest = numbers[0];
    for( let i = 0; i <numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 165,137, 265];
const tallest = maxInArray(heights);
console.log(tallest);

// Home work: 
// write a function to get the lowest number in an array.
