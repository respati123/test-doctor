import ProductRepository from "domain/repository/ProductRepository"

export default class GetProducts  {
    
    private productRepo: ProductRepository

    constructor(_productRepos: ProductRepository) {
        this.productRepo = _productRepos;
    }

    async invoke() {
        return this.productRepo.getProductList()
    }

    
}