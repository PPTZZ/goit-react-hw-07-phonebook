import { useEffect } from 'react';
import Home from '../pages/Home';
import Searchbar from './Searchbar';
import { fetchAPI } from '../services/fetchApi';

const App = () => {
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Searchbar />
      <Home />
    </>
  );
};
export default App;
