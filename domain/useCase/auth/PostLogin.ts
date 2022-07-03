import { LoginBody } from "data/datasource/API/entity/Login";
import { AuthRepository } from "domain/repository/AuthRepository";

export class PostLogin {
    
    private authRepo: AuthRepository;

    constructor(_authRepo: AuthRepository) {
        this.authRepo = _authRepo;
    }

    async invoke(body: LoginBody) {
        return this.authRepo.Login(body)
    }
}