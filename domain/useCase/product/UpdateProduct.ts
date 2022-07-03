import {  ProductBodyUpdate } from "data/datasource/API/entity/Product";
import ProductRepository from "domain/repository/ProductRepository";


export default class UpdateProduct {
    
    private productRepo: ProductRepository;

    constructor(_productRepo: ProductRepository) {
        this.productRepo = _productRepo
    }

    async invoke(body: ProductBodyUpdate) {
        return this.productRepo.updateProduct(body);
    }
}