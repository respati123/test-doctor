import { AxiosResponse } from "axios";
import { ProductBodyAdd, ProductBodyUpdate, ProductSearch } from "data/datasource/API/entity/Product";
import ProductDataSource from "data/datasource/ProductDataSource";
import ProductRepository from "domain/repository/ProductRepository";

export default class ProductRepositoryImpl implements ProductRepository {

    dataSorce: ProductDataSource;

    constructor(_dataSource: ProductDataSource) {
        this.dataSorce  = _dataSource;
    }
    getProduct(body: ProductSearch): Promise<AxiosResponse<any, any>> {
        return this.dataSorce.getProduct(body)
    }


    getProductList(): Promise<AxiosResponse<any, any>> {
        return this.dataSorce.getProductList()
    }
    addProduct(product: ProductBodyAdd): Promise<AxiosResponse<any, any>> {
        return this.dataSorce.addProduct(product)
    }
    updateProduct(product: ProductBodyUpdate): Promise<AxiosResponse<any, any>> {
        return this.dataSorce.updateProduct(product)
    }
    deleteProduct(): Promise<AxiosResponse<any, any>> {
        throw new Error("Method not implemented.");
    }
    
}