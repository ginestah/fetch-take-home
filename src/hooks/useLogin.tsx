import { useMutation } from '@tanstack/react-query';
import api from '../services/apiConfig';

interface LoginParams {
  email: string;
  name: string;
}


async function login({ email, name }: LoginParams) {
  const response = await api.post('/auth/login', { email, name });
  return response.data;
}

export default function useLogin() {
  const mutation = useMutation({ mutationFn: login });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
  };
}