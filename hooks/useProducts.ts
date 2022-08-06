import useSWR, { SWRConfiguration } from 'swr'



const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json())

export const useProducts = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR(`/api/${url}`, fetcher, config 
    )


    return {
        products : data, 
        isError: error,
        isLoading: !error && !data,
        
    }
}
