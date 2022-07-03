export const getStorage = (key: string) => {
    if(typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem(key) || "");
    }
}

export const setStorage = (key: string, value: any) => {
    if(typeof window !== "undefined") {
        return localStorage.setItem(key, JSON.stringify(value))
    }
}