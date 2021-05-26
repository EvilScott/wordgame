import { scoreGuess } from 'lib/logic';

export default async (req, res) => {
  const { keyLetter, letters, guess } = req.query;
  const score = await scoreGuess(keyLetter, letters, guess);
  res.status(200).json({ score });
}
