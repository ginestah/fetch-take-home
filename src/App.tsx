import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './screens/Login/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Search from './screens/Search/Search';
import { FavoriteDogsProvider } from './context/FavoriteDogsContext';
import Favorites from './screens/Favorites/Favorites';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteDogsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </FavoriteDogsProvider>
    </QueryClientProvider>
  );
}

export default App;