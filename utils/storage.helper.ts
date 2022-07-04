export const getStorage = (key: string) => {
    if(typeof window !== "undefined") {
        return localStorage.getItem(key);
    }
}

export const setStorage = (key: string, value: any) => {
    if(typeof window !== "undefined") {
        return localStorage.setItem(key, JSON.stringify(value))
    }
}

export const deleteStorage = (key: string) => {
    if(typeof window !== "undefined") {
        return localStorage.removeItem(key);
    }
}