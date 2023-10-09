import genres from '../data/genres'
import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';
export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => {
   return useQuery({
    /* there was an error on the queryKey property, that is because, the
       getAll function return a result with <FetchResponse<Genre>> type,
       while the initialData shows a undefiend type. Because i add a next property in 
       FetchResponse interface, while initialData only have count and results properties.
       so, to fix this issue, should add the next: null to initialData
    */
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 *1000 ,
    initialData: genres
  })
}

export default useGenres;