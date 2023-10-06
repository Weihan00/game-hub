import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import APIClient from '../services/api-client'

export interface Platform {
    id: number,
    name:string,
    slug:string

}

const apiClient = new APIClient<Platform>('/platforms/list/parents')
const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000,
    initialData: {count: platforms.length, results: platforms}
})

export default usePlatform