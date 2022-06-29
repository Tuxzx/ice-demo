import Guide from '@/components/Guide';
import { Link } from 'ice';

const Home = () => {
  return (
    <>
      <Guide />
      <Link to={'/a'}>Component A</Link>
      <Link to={'/b'}>Component B</Link>
    </>
  );
};

export default Home;
