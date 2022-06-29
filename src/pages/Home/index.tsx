import Guide from '@/components/Guide';
import { Link } from 'ice';

const Home = () => {
  return (
    <>
      <Guide />
      <Link to={'/component/a'}>Component A</Link>
      <Link to={'/component/b'}>Component B</Link>
    </>
  );
};

export default Home;
