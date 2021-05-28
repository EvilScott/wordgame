import {
  calculatePossibleScore,
  generateBaseWords,
  getLetters,
  sampleBaseWord,
} from 'lib/logic';

export default async (req, res) => {
  await generateBaseWords();
  const [ keyLetter, ...letters ] = getLetters(sampleBaseWord());
  const possibleScore = await calculatePossibleScore(keyLetter, letters)
  res.status(200).json({ keyLetter, letters, possibleScore });
}
