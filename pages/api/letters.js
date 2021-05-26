import { generateBaseWords, sampleBaseWord, getLetters } from 'lib/logic';

export default async (req, res) => {
  await generateBaseWords();
  res.status(200).json({ letters: getLetters(sampleBaseWord()) });
}
