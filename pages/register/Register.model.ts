import { AuthAPIDataSourceImpl } from "data/datasource/API/AuthAPIDataSourceImpl";
import { RegisterBody, RegisterResponse } from "data/datasource/API/entity/Register";
import { AuthRepositoryImpl } from "data/repository/AuthRepositoryImpl";
import { PostRegister } from "domain/useCase/auth/PostRegister";
import { useMutation } from "hooks/useMutation";
import Router from "next/router";
import { MouseEvent, useCallback, useRef, useState } from "react";

const useRegisterModel = () => {
    const isComputed = useRef(true)
    const [email, setEmail] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const useCase = new PostRegister(new AuthRepositoryImpl(new AuthAPIDataSourceImpl()));
    const { data, error, loading, mutation } = useMutation<RegisterResponse>(async (dataBody: RegisterBody) => {

        let response = await useCase.invoke({email: dataBody.email, password: dataBody.password});


        if(response.status !== 200) {
            throw Error(response.data)
        }

        return response.data;
    }, isComputed);

    const onRegister = useCallback(async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        await mutation({ email, password })
    },[email, password])

    const handleEmail = useCallback((value: string) => setEmail(value), [email])
    const handlePassword =  useCallback((value: string) => setPassword(value), [password]);
    const onClickLogin = () => Router.push("/login")


    return {
        email,
        password,
        data,
        error,
        loading,
        setEmail: handleEmail,
        setPassword: handlePassword,
        onClickLogin,
        onRegister,
    }
}

export default useRegisterModel