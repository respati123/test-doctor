import { AxiosResponse } from "axios";
import { MutableRefObject, useCallback, useEffect, useState } from "react"


export const useMutation: T = (instance: Function, ref: MutableRefObject<null | boolean>)  => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>();
    const [data, setData] = useState<T>();

    useEffect(() => {
        return () => {
            if (ref?.current) {
                ref.current = false
            }
        }
    }, [ref])

    const execution = useCallback(async (body: any) => {
        try {
            setLoading(true);
            let response;
            response = await instance(body)
            setData(response);
            setError(undefined)
            console.log("useFetch success", response);
        }catch(error) {
            setError(error.response.data);
            console.log("useFetch error", error)
        } finally {
            setLoading(false)
        }
    }, [])

    return {
        data,
        error,
        loading,
        mutation: async (body: any) => await execution(body)
    }
}