import { Link } from 'react-router-dom';
import DogCard from '../../components/DogCard/DogCard';
import { useFavoriteDogs } from '../../context/FavoriteDogsContext';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useMatch from '../../hooks/useMatch';
import MatchDialog from '../../components/MatchDialog/MatchDialog';
export default function Favorites({ }) {
  const { favoriteDogs } = useFavoriteDogs();
  const navigate = useNavigate();
  const { match, data: myMatch } = useMatch();
  const [open, setOpen] = useState(false);

  function handleMatch() {
    match(favoriteDogs);
    setOpen(true);
  }
  return (
    <div className='page'>
      <h1>Favorites</h1>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>

        {favoriteDogs.length === 0 ? (
          <p>
            No favorites yet! Click <Link to='/search'>here</Link> to return to search.
          </p>
        ) : (
          <Button variant='outlined' color='primary' onClick={() => navigate('/search')}>
            Search
          </Button>
        )}
        {favoriteDogs.length > 0 && (
          <Button variant='outlined' onClick={handleMatch}>
            Match me with a dog!
          </Button>
        )}
      </div>
      <MatchDialog open={open} myMatch={myMatch} handleClose={() => setOpen(false)} />
      <div className='table-container'>
        {favoriteDogs.map((dog) => (
          <DogCard dog={dog} />
        ))}
      </div>
    </div>
  );
}
