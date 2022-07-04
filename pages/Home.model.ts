import { STORAGE_USER } from "constants/storage.constants"
import { ProductBodyAdd, ProductBodyUpdate } from "data/datasource/API/entity/Product"
import ProductAPIDataSourceImpl from "data/datasource/API/ProductAPIDataSourceImpl"
import ProductRepositoryImpl from "data/repository/ProductRepositoryImpl"
import Product from "domain/model/Product"
import AddProduct from "domain/useCase/product/AddProduct"
import GetProduct from "domain/useCase/product/GetProduct"
import GetProducts from "domain/useCase/product/GetProducts"
import UpdateProduct from "domain/useCase/product/UpdateProduct"
import { useFetch } from "hooks/useFetch"
import { useMutation } from "hooks/useMutation"
import { ChangeEvent, InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react"
import { getStorage } from "utils/storage.helper"



const useHomeModel = () => {

    
    
    const [isVisibleModal, setisVisibleModal] = useState<boolean>(false);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [form, setForm] = useState<ProductBodyAdd>();



    const isComputed = useRef(true)
    const useCaseGet = new GetProducts(new ProductRepositoryImpl(new ProductAPIDataSourceImpl()))
    const useCaseAdd = new AddProduct(new ProductRepositoryImpl(new ProductAPIDataSourceImpl()))
    const useCaseGetProduct = new GetProduct(new ProductRepositoryImpl(new ProductAPIDataSourceImpl()))
    const useCaseUpdate = new UpdateProduct(new ProductRepositoryImpl(new ProductAPIDataSourceImpl()))
    const { data: dataAdd, error: errorAdd, loading: loadingAdd, mutation} = useMutation(async (body: ProductBodyAdd) => {
        let response = await useCaseAdd.invoke(body);

        if(response.status !== 200) {
            throw Error('tidak berhasil')
        }

        return response.data
    }, isComputed)

    const { data: dataUpdate,  loading: loadingUpdate, mutation: mutationUpdate} = useMutation(async (body: ProductBodyUpdate) => {
        let response = await useCaseUpdate.invoke(body);

        if(response.status !== 200) {
            throw Error('tidak berhasil')
        }

        return response.data
    }, isComputed)

    const { data: productDetail, error: errorDetail, loading: loadingDetail, mutation: mutationDetail } = useMutation<Product>(async (sku: string) => {
        let response = await useCaseGetProduct.invoke({ sku });

        if(response.status !== 200) {
            throw Error('tidak berhasil')
        }

        return response.data
    }, isComputed)


    const { data: productList, error: errorList, loading: loadingList, refetching } = useFetch<Product[]>(async () => {
        let response = await useCaseGet.invoke();

        if(response.status !== 200) {
            throw Error('tidak berhasil')
        }

        return response.data
    }, isComputed)

    useEffect(() => {
        if(dataAdd || dataUpdate) {
            toggleModal();
            refetching();
        }
    }, [dataAdd, dataUpdate])

    useEffect(() => {
        if(productDetail) {
            setForm({
                ...form,
                Sku: productDetail.sku,
                Product_name: productDetail.product_name,
                Price: productDetail.price,
                Qty: productDetail.qty,
                Status: productDetail.status,
                Unit: productDetail.unit
            })
        }
    }, [productDetail])

    const toggleModal = useCallback(() => {
        setisVisibleModal(!isVisibleModal)
    }, [isVisibleModal])

    const onAddProduct = useCallback(() => mutation({
        sku: form?.Sku,
        product_name: form?.Product_name,
        qty: form?.Qty,
        price: form?.Price,
        unit: form?.Unit,
        status: form?.Status
    }) ,[form])

    const onUpdateProduct = useCallback(() => mutationUpdate({
        sku: form?.Sku,
        product_name: form?.Product_name,
        qty: form?.Qty,
        price: form?.Price,
        unit: form?.Unit,
        status: form?.Status
    }) ,[form])

    const onChangeForm = useCallback((type: string, value: string) => {
        setForm({
            ...form!,
            [type]: value
        })
    }, [form])

    const onEdit = useCallback(async (sku: string) => {
        await mutationDetail(sku)
        setIsUpdate(true);
        setisVisibleModal(!isVisibleModal)
    }, [isUpdate, isVisibleModal])

    const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log("search value", value);
        productList.filter((item: Product) => item.sku.search(value))
    }, [productList])


    const isAuthenticated = () => {
        const store = getStorage(STORAGE_USER);
        console.log("STORE", store)
        return store;
    }

    return {
        onSearch,
        productList,
        errorList,
        loadingList,
        isVisibleModal,
        isUpdate,
        loadingAdd,
        loadingDetail,
        toggleModal,
        onEdit,
        form,
        productDetail,
        onAddProduct,
        onUpdateProduct,
        onChangeForm,
        isAuthenticated,
    }
}


export default useHomeModel