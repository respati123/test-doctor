import { AxiosResponse } from "axios";
import { LoginBody } from "data/datasource/API/entity/Login";
import { RegisterBody } from "data/datasource/API/entity/Register";

export interface AuthRepository {
    Register(body: RegisterBody): Promise<AxiosResponse>
    Login(body: LoginBody): Promise<AxiosResponse>
}