import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Dog } from '../types/Dog';

interface FavoriteDogsContextProps {
  favoriteDogs: Dog[];
  setFavoriteDogs: React.Dispatch<React.SetStateAction<Dog[]>>;
}

const FavoriteDogsContext = createContext<FavoriteDogsContextProps | undefined>(undefined);

export const FavoriteDogsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>(() => {
    const storedFavorites = localStorage.getItem('favoriteDogs');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteDogs', JSON.stringify(favoriteDogs));
  }, [favoriteDogs]);

  return (
    <FavoriteDogsContext.Provider value={{ favoriteDogs, setFavoriteDogs }}>
      {children}
    </FavoriteDogsContext.Provider>
  );
};

export const useFavoriteDogs = (): FavoriteDogsContextProps => {
  const context = useContext(FavoriteDogsContext);
  if (!context) {
    throw new Error('useFavoriteDogs must be used within a FavoriteDogsProvider');
  }
  return context;
};