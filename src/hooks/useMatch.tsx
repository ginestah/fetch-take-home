import { useMutation } from '@tanstack/react-query';
import api from '../services/apiConfig';
import { Dog } from '../types/Dog';
import getDogs from '../services/getDogs';

async function match(favorites: Dog[]): Promise<Dog> {
    const payload = favorites.map((fave) => fave.id);
    const response = await api.post('/dogs/match', payload)
    const matchId = response.data.match;
    const [dog] = await getDogs([matchId]);
    return dog;
}

export default function useMatch() {
    const mutation = useMutation({ mutationFn: match });

    return {
        match: mutation.mutate,
        isLoading: mutation.isPending,
        isError: mutation.isError,
        isSuccess: mutation.isSuccess,
        data: mutation.data
    };
}
