import { generateBaseWords, sampleBaseWord, getLetters } from 'lib/logic';

export default async (req, res) => {
  await generateBaseWords();
  const letters = getLetters(sampleBaseWord());
  res.status(200).json({ letters });
}
