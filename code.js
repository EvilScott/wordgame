const hl = require('highland');
const { createReadStream } = require('fs');

let BASE_WORDS = [];
const WORD_FILE = './words.txt'; // from http://www.gwicks.net/dictionaries.htm

async function generateBaseWords() {
  BASE_WORDS = await hl(createReadStream(WORD_FILE))
    .split()
    .filter(word => word.match(/^[a-z]{7,}$/))
    .filter(word => new Set(word).size === 7)
    .collect()
    .toPromise(Promise);
}

async function getSolutions(baseWord, keyLetter) {
  const letters = Array.from(new Set(baseWord)).sort();
  return hl(createReadStream(WORD_FILE))
    .split()
    .filter(word => word.match(`^[${letters.join()}]{4,}$`))
    .filter(word => word.match(`${keyLetter}`))
    .collect()
    .toPromise(Promise);
}

function sampleBaseWord() {
  return BASE_WORDS[Math.floor(Math.random() * BASE_WORDS.length)];
}

(async () => {
  await generateBaseWords();
  const baseWord = sampleBaseWord();
  const letters = Array.from(new Set(baseWord)).sort();
  console.log(baseWord);
  const keyLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log(keyLetter);
  const solutions = await getSolutions(baseWord, keyLetter);
  console.log(solutions);
})();
