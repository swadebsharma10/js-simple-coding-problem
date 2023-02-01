const lyrics = 'tumi bondhu kala pakhi ami jno ki. bosonto kale tomay dekhty pari ni. kala kala sada sada';
const words= lyrics.split(' ');
const sentence = lyrics.split('.');
const letter = lyrics.split('');
// console.log(letter);

//Join
const lines = [
    'Tumi bondhu kala pakhi ami jno ki',
    'Bosonto kale tomay dekhty pari ni',
    'Kala kala sada sada'
  ];
  const newSong = lines.join(': ');
  console.log(newSong);