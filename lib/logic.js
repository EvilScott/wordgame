import hl from 'highland';
import path from 'path';
import { createReadStream } from 'fs';
import { chain } from 'lodash';

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
    .filter(word => word.match(`^[${letters.join()}]{4,}$`))
    .filter(word => word.match(`${keyLetter}`))
    .collect()
    .toPromise(Promise);
}

export function sampleBaseWord() {
  return BASE_WORDS[Math.floor(Math.random() * BASE_WORDS.length)];
}

export function getLetters(baseWord) {
  return chain(baseWord).split('').uniq().shuffle().values()
}
