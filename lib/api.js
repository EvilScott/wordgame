const BASE_URL = 'http://localhost:3000';

export async function getLetters() {
  const url = new URL(`${BASE_URL}/api/letters`);
  const res = await fetch(url);
  //TODO handle error
  const { letters } = await res.json();
  return letters;
}

export async function scoreGuess(keyLetter, letters, guess) {
  const url = new URL(`${BASE_URL}/api/guess`);
  const params = { keyLetter, letters: letters.join(''), guess };
  url.search = new URLSearchParams(params).toString();
  const res = await fetch(url);
  //TODO handle error
  const { score } = await res.json();
  return score;
}
