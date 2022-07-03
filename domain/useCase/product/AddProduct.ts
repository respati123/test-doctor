import { ProductBodyAdd } from "data/datasource/API/entity/Product";
import ProductRepository from "domain/repository/ProductRepository";


export default class AddProduct {
    
    private productRepo: ProductRepository;

    constructor(_productRepo: ProductRepository) {
        this.productRepo = _productRepo
    }

    async invoke(body: ProductBodyAdd) {
        return this.productRepo.addProduct(body);
    }
}