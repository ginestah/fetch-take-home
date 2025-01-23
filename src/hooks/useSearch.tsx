import { useQuery } from '@tanstack/react-query';
import api from '../services/apiConfig';
import { DogResponse } from '../types/DogResponse';
import { DogsQuery } from '../types/DogsQuery';
import getDogs from '../services/getDogs';

function buildQueryString(query: DogsQuery): string {
  const params = new URLSearchParams();

  // Add breeds
  if (query.breeds && query.breeds[0] !== "") {
    query.breeds.forEach(breed => params.append('breeds', breed));
  }

  // Add sort and sortOrder
  if (query.sortBy && query.sortOrder) {
    params.append('sort', `${query.sortBy}:${query.sortOrder}`);
  }

  // Add size if provided
  if (query.size) {
    params.append('size', query.size.toString());
  }

  // Add from if provided
  if (query.page) {
    params.append('from', Math.round((query.page * (query.size || 25)) - 25).toString());
  }

  return params.toString();
}

async function search(query: string): Promise<DogResponse> {
  const response = await api.get('/dogs/search' + (query ? `?${query}` : ''));
  const resultIds = response.data.resultIds;
  const dogs = await getDogs(resultIds);
  return { dogs, total: response.data.total };
}

export default function useSearch(query: any = { breeds: [""] }): { data: DogResponse | undefined; status: string; isError: boolean; isSuccess: boolean; error: any } {


  const newQuery = buildQueryString(query);
  const { data, isError, isSuccess, status, error } = useQuery({
    queryKey: ['dogs', newQuery],
    queryFn: () => search(newQuery),
  });
  return { data, status, isError, isSuccess, error };
}

async function getBreeds(): Promise<[string]> {
  const response = await api.get('/dogs/breeds');
  return response.data;
}

export function useBreeds(): [string] | undefined {
  const { data: breeds } = useQuery<[string]>({
    queryKey: ['breeds'],
    queryFn: getBreeds,
  });
  return breeds;
}