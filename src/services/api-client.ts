import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2aa7ff2765fb44d99fc8eaa5b95afffd'
    }
})

