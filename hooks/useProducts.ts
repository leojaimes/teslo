import useSWR, { SWRConfiguration } from 'swr'
import { IProduct } from '../interfaces'





export const useProducts = (url: string, config: SWRConfiguration = {}) => {
    //const { data, error } = useSWR<IProduct[]>(`/api/${url}`, fetcher, config)
    const { data, error } = useSWR<IProduct[]>(`/api/${url}`,  config)


    return {
        products: data || [],
        isError: error,
        isLoading: !error && !data,

    }
}
    