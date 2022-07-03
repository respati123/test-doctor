import { RegisterBody } from "data/datasource/API/entity/Register";
import { AuthRepository } from "domain/repository/AuthRepository";

export class PostRegister {
    
    private authRepo: AuthRepository;

    constructor(_authRepo: AuthRepository) {
        this.authRepo = _authRepo;
    }

    async invoke(body: RegisterBody) {
        return this.authRepo.Register(body)
    }
}