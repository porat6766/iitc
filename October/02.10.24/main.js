const words = ["apple", "banana"];

const letterCount = {};
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  for (let j = 0; j < word.length; j++) {
    let letter = word[j];
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
}

console.log(letterCount);
