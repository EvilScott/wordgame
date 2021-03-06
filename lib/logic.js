import hl from 'highland';
import path from 'path';
import { createReadStream } from 'fs';
import { shuffle } from 'lodash';

let BASE_WORDS = [];
const WORD_FILE = path.join(process.cwd(), 'words.txt'); // from http://www.gwicks.net/dictionaries.htm

export async function generateBaseWords() {
  if (BASE_WORDS.length > 0) { return } // memoize
  BASE_WORDS = await hl(createReadStream(WORD_FILE))
    .split()
    .filter(word => word.match(/^[a-z]{7,}$/))
    .filter(word => new Set(word).size === 7)
    .collect()
    .toPromise(Promise);
}

export async function getSolutions(keyLetter, letters) {
  return hl(createReadStream(WORD_FILE))
    .split()
    .filter(word => word.match(`^[${keyLetter}${letters}]{4,}$`))
    .filter(word => word.match(`${keyLetter}`))
    .collect()
    .toPromise(Promise);
}

export function sampleBaseWord() {
  return BASE_WORDS[Math.floor(Math.random() * BASE_WORDS.length)];
}

export function getLetters(baseWord) {
  return shuffle(Array.from(new Set(baseWord)));
}

export async function calculatePossibleScore(keyLetter, letters) {
  const solutions = await getSolutions(keyLetter, letters);
  return solutions.reduce((total, word) => total + word.length, 0);
}

export async function scoreGuess(keyLetter, letters, guess) {
  const solutions = await getSolutions(keyLetter, letters);
  return solutions.includes(guess) ? guess.length : 0;
}
