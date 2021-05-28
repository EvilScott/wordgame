const BASE_URL = 'http://localhost:3000';

export async function getLetters() {
  const url = new URL(`${BASE_URL}/api/letters`);
  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    return [];
  }
  return res.json();
}

export async function scoreGuess(keyLetter, letters, answers, guess) {
  if (!guess.split('').includes(keyLetter)) {
    return { score: 0, message: 'Need to include <span class="blue">blue</span> letter' };
  } else if (guess.length < 4) {
    return { score: 0, message: 'Guess too short' };
  } else if (answers.includes(guess)) {
    return { score: 0, message: 'Already found' };
  }

  const url = new URL(`${BASE_URL}/api/guess`);
  const params = { keyLetter, letters: letters.join(''), guess };
  url.search = new URLSearchParams(params).toString();
  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    return { score: 0, message: 'Something went wrong' };
  }
  const { score } = await res.json();
  return { score, message: score === 0 ? 'Guess not found' : `+ ${score} points` };
}
