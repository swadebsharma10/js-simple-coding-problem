const lyrics = 'tumi bondhu kala pakhi ami jno ki. bosonto kale tomay dekhty pari ni';

// condition no: 1
const search = 'pakhi';
const doesExit1 = lyrics.includes(search);
// console.log(doesExit1);

// you can do in this  way..
const doesExit2 = lyrics.includes('pakkhi');
// console.log(doesExit2);

// You need to change the string case ;

// Condition:3
const searchString = 'Pakhi';

const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExit = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExit)


// ----------------------------------
// ----------------------------------
// IndexOf of a string
// and cheack the condition.

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('tumi'));

console.log(lyrics.indexOf('kailla'));
// condition

if (lyrics.indexOf('kala') !== -1){
   console.log('Exist inside the string'); 
}
else{
    console.log('can not find it');
}



// StartWith
console.log(lyrics.startsWith('tumi'));

// endsWith
console.log(lyrics.endsWith('ni'))