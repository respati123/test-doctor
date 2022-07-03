import { AxiosResponse } from "axios";
import { ProductBodyAdd, ProductBodyUpdate, ProductSearch } from "data/datasource/API/entity/Product";

export default interface ProductRepository {
    getProductList(): Promise<AxiosResponse>
    addProduct(product: ProductBodyAdd): Promise<AxiosResponse>
    updateProduct(product: ProductBodyUpdate): Promise<AxiosResponse>
    deleteProduct(): Promise<AxiosResponse>
    getProduct(body: ProductSearch): Promise<AxiosResponse>
}