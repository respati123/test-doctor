import { AxiosResponse } from "axios";
import BaseApi from "config/BaseApi";
import { API_LOGIN, API_REGISTER } from "constants/api.constants";
import { AuthDataSource } from "../AuthDataSource";
import { LoginBody } from "./entity/Login";
import { RegisterBody } from "./entity/Register";

export class AuthAPIDataSourceImpl implements AuthDataSource {


    Login(body: LoginBody): Promise<AxiosResponse<any, any>> {
        return BaseApi().post(API_LOGIN, body);
    }
    

    Register(body: RegisterBody): Promise<AxiosResponse<any, any>> {        
        return BaseApi().post(API_REGISTER, body);
    }

}