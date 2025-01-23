import { useNavigate } from 'react-router-dom';
import useSearch, { useBreeds } from '../../hooks/useSearch';
import { Dog } from '../../types/Dog';
import './Search.css';
import { useEffect, useState } from 'react';
import Toast from '../../components/Toast/Toast';
import DogCard from '../../components/DogCard/DogCard';
import SingleSelect from '../../components/SingleSelect/SingleSelect';
import MultiSelect from '../../components/MultiSelect/MultiSelect';
import PaginationFooter from '../../components/PaginationFooter/PaginationFooter';
import { Button } from '@mui/material';
export default function Search() {
  const navigate = useNavigate();
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>(() => {
    const params = new URLSearchParams(location.search);
    return params.get('breeds')?.split(',') || [''];
  });
  const [sortOrder, setSortOrder] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get('sortOrder') || 'asc';
  });
  const sortBy = 'breed';
  const [page, setPage] = useState(() => {
    const params = new URLSearchParams(location.search);
    return parseInt(params.get('page') || '1', 10);
  });
  const breeds = useBreeds();
  function handleBreedFilter(_: any, value: string[]) {
    setSelectedBreeds(value);
  }

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data, isError, error } = useSearch({ breeds: selectedBreeds, sortOrder, sortBy, page });
  const { dogs, total } = data || { dogs: [], total: 0 };

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedBreeds.length > 0) {
      params.append('breeds', selectedBreeds.join(','));
    }
    params.append('sortOrder', sortOrder);
    params.append('sortBy', sortBy);
    params.append('page', page.toString());

    navigate({
      pathname: '/search',
      search: params.toString()
    }, { replace: true });
  }, [selectedBreeds, sortOrder, sortBy, page, navigate]);
  useEffect(() => {
    if (isError) {
      if (error?.status === 401) {
        navigate('/login');
      }
    }
  }, [isError]);

  return (
    <div className='page'>
      <div className='header'>
        <SingleSelect value={sortOrder} setValue={setSortOrder} options={[{ value: 'asc', name: 'Ascending' }, { value: 'desc', name: 'Descending' }]} label='Sort order' />
        <MultiSelect options={breeds || ['']} placeholder='Breeds' label='Filter by breed' handleChange={handleBreedFilter} />
        <Button variant='outlined' color='primary' onClick={() => navigate('/favorites')}>Favorites</Button>
      </div>
      <div className='table-container'>
        {dogs?.map((dog: Dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
      <PaginationFooter handleChange={handlePageChange} count={Math.floor(total / 25)} page={page} />
      {isError && error?.status === 401 && <Toast message='Please login to continue' />}
    </div>
  );
}
