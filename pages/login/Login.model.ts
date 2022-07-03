import { AuthAPIDataSourceImpl } from "data/datasource/API/AuthAPIDataSourceImpl";
import { LoginBody, LoginResponse } from "data/datasource/API/entity/Login";
import { AuthRepositoryImpl } from "data/repository/AuthRepositoryImpl";
import { PostLogin } from "domain/useCase/auth/PostLogin";
import { useMutation } from "hooks/useMutation";
import { MouseEvent, useCallback, useRef, useState } from "react";
import create from 'zustand'
import Router from 'next/router'
import { setStorage } from "utils/storage.helper";
import { STORAGE_USER } from "constants/storage.constants";

interface LoginState {
    email: string;
    password: string;
    setEmail: (value: string) => void,
    setPassword: (value: string) => void,
}

const useStore = create<LoginState>((set) => ({
    email: '',
    password: '',
    setEmail: (value: string) => set(state => ({ email: value})),
    setPassword: (value: string) => set(state => ({ password: value}))
}))

export default function useLoginModel(){
    const isComputed = useRef(true)
    const [email, setEmail] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const useCase = new PostLogin(new AuthRepositoryImpl(new AuthAPIDataSourceImpl()));
    const { data, error, loading, mutation } = useMutation<LoginResponse>(async (dataBody: LoginBody) => {

        let response = await useCase.invoke({email: dataBody.email, password: dataBody.password});


        if(response.status !== 200) {
            throw Error(response.data)
        }

        console.log("storage", response.data);
        await setStorage(STORAGE_USER, response.data?.token);

        return response.data;
    }, isComputed);

    const onLogin = useCallback(async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        await mutation({ email, password })
    },[email, password])

    const handleEmail = useCallback((value: string) => setEmail(value), [email])
    const handlePassword =  useCallback((value: string) => setPassword(value), [password]);
    const onClickRegister = () => Router.push("/register")

    if(data) {
        Router.push("/")
    }
    
    return {
        data,
        loading,
        error,
        email,
        password,
        onClickRegister,
        onLogin,
        setEmail: handleEmail, 
        setPassword:  handlePassword
    }
    
}