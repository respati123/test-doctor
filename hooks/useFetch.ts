import { MutableRefObject, useEffect, useState } from "react"


export const useFetch: T = (instance: Function, ref: MutableRefObject<null | boolean>)  => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>();
    const [data, setData] = useState<T>(); 

    useEffect(() => {
        console.log("fetching 1", ref.current)
        if(ref.current) {
            fetching();
        }

        return () => {
            if (ref?.current) {
                ref.current = false
            }
        }
    }, [ref])

    const fetching = async () => {
        try {
            let response;
            response = await instance()
            setData(response);
            console.log("useFetch success", response);
        }catch(error) {
            setError(error);
            console.log("useFetch error", error)
        } finally {
            setLoading(false)
        }
    }

    const refetching = async () => await fetching();

    return {
        data,
        error,
        loading,
        refetching,
    }
}