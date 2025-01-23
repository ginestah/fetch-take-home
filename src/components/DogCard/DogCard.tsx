import { useMemo } from "react";
import { Dog } from "../../types/Dog";
import { FaStar } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';
import { useFavoriteDogs } from "../../context/FavoriteDogsContext";


interface DogCardProps {
  dog: Dog;
}
export default function DogCard({ dog }: DogCardProps) {
  const { favoriteDogs, setFavoriteDogs } = useFavoriteDogs();;
  const isFavorite = useMemo(() => {
    const ids = favoriteDogs.map(dog => dog.id);
    return ids.includes(dog.id);
  }, [favoriteDogs])

  function handleFavoriteClick(dog: Dog) {
    if (isFavorite) {
      setFavoriteDogs(favoriteDogs.filter(fave => fave.id !== dog.id));
    } else {
      setFavoriteDogs(prevFave => [...prevFave, dog]);
    }
  }
  return (
    <div style={{ border: isFavorite ? '1px solid gold' : '' }} key={dog.id} className="card">
      <img src={dog.img} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Zip Code: {dog.zip_code}</p>
      <p>Breed: {dog.breed}</p>
      <Tooltip title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
        <FaStar
          onClick={() => handleFavoriteClick(dog)}
          style={{ cursor: 'pointer', color: isFavorite ? 'gold' : 'gray' }}
        />
      </Tooltip>
    </div>
  )

}