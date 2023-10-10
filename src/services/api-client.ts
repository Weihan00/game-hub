import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;

    results: T[];
  }
// export axios.create({
//     baseURL: 'https://api.rawg.io/api',
//     params: {
//         key: '2aa7ff2765fb44d99fc8eaa5b95afffd'
//     }
// })

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2aa7ff2765fb44d99fc8eaa5b95afffd'
    }
})

class APIClient<T> {
    endpoint: string;
    constructor(endpoint:string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint,config).then(res => res.data);
    }

    post=(data:T)=>{
        return axiosInstance.post(this.endpoint, data).then(res => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id)
        .then(res => res.data)
    }
}

export default APIClient