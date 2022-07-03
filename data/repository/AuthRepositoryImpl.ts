import { AxiosResponse } from "axios";
import { LoginBody } from "data/datasource/API/entity/Login";
import { RegisterBody } from "data/datasource/API/entity/Register";
import { AuthDataSource } from "data/datasource/AuthDataSource";
import { AuthRepository } from "domain/repository/AuthRepository";

export class AuthRepositoryImpl implements AuthRepository {
    
    dataSource : AuthDataSource 

    constructor(_dataSource: AuthDataSource) {
        this.dataSource = _dataSource;
    }
    
    Login(body: LoginBody): Promise<AxiosResponse<any, any>> {
        return this.dataSource.Login(body);
    }

    Register(body: RegisterBody): Promise<AxiosResponse<any, any>> {
        return this.dataSource.Register(body)    
    }




    
    
}