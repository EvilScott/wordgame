const BASE_URL = 'http://localhost:3000';

export async function getLetters() {
  const url = new URL(`${BASE_URL}/api/letters`);
  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    return [];
  }
  const { letters } = await res.json();
  return letters;
}

export async function scoreGuess(keyLetter, letters, guess) {
  const url = new URL(`${BASE_URL}/api/guess`);
  const params = { keyLetter, letters: letters.join(''), guess };
  url.search = new URLSearchParams(params).toString();
  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    return 0;
  }
  const { score } = await res.json();
  return score;
}
