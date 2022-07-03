import { ProductSearch } from "data/datasource/API/entity/Product";
import ProductRepository from "domain/repository/ProductRepository"

export default class GetProduct  {
    
    private productRepo: ProductRepository

    constructor(_productRepos: ProductRepository) {
        this.productRepo = _productRepos;
    }

    async invoke(body: ProductSearch) {
        return this.productRepo.getProduct(body)
    }

    
}