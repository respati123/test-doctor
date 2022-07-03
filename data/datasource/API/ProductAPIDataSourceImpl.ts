import { AxiosResponse } from "axios";
import BaseApi from "config/BaseApi";
import { API_ADD_PRODUCT, API_GET_PRODUCT, API_SEARCH_PRODUCT, API_UPDATE_PRODUCT } from "constants/api.constants";
import ProductDataSource from "../ProductDataSource";
import { ProductBodyAdd, ProductBodyUpdate, ProductSearch } from "./entity/Product";

export default class ProductAPIDataSourceImpl implements ProductDataSource {
    getProduct(body: ProductSearch): Promise<AxiosResponse<any, any>> {
        return BaseApi().post(API_SEARCH_PRODUCT, body )
    }


    getProductList(): Promise<AxiosResponse<any, any>> {
        return BaseApi().get(API_GET_PRODUCT)
    }
    addProduct(product: ProductBodyAdd): Promise<AxiosResponse<any, any>> {
        return BaseApi().post(API_ADD_PRODUCT, product)
    }
    updateProduct(product: ProductBodyUpdate): Promise<AxiosResponse<any, any>> {
        return BaseApi().post(API_UPDATE_PRODUCT, product)
    }
    deleteProduct(): Promise<AxiosResponse<any, any>> {
        throw new Error("Method not implemented.");
    }

}