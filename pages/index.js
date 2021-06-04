import Game from 'components/Game';
import Layout from 'components/Layout';
import { getLetters } from 'lib/api';

export default function Home({ keyLetter, letters, possibleScore }) {
  return (
    <Layout>
      <h1>WordGame</h1>
      <p>
        Spell as many words as you can with the following letters,<br />
        but every word <i>must</i> use the <span className={'blue'}>blue</span> letter{' '}
        and be at least 4 letters long.
      </p>
      <Game keyLetter={keyLetter} letters={letters} possibleScore={possibleScore} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const { keyLetter, letters, possibleScore } = await getLetters();
  return { props: { keyLetter, letters, possibleScore }};
}
