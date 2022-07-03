import { AxiosResponse } from "axios";
import { LoginBody } from "./API/entity/Login";
import { RegisterBody } from "./API/entity/Register";

export interface AuthDataSource {
    Register(body: RegisterBody): Promise<AxiosResponse>
    Login(body: LoginBody): Promise<AxiosResponse>
}