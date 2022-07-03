import { AxiosResponse } from "axios"
import { ProductBodyAdd, ProductBodyUpdate, ProductSearch,  } from "./API/entity/Product"

export default interface ProductDataSource {
    getProductList(): Promise<AxiosResponse>
    addProduct(product: ProductBodyAdd): Promise<AxiosResponse>
    updateProduct(product: ProductBodyUpdate): Promise<AxiosResponse>
    deleteProduct(): Promise<AxiosResponse>
    getProduct(body: ProductSearch): Promise<AxiosResponse>
}