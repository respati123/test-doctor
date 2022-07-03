export interface ProductBodyAdd {
    Sku: string;
    Product_name: string;
    Qty:  number;
    Price:  number;
    Unit:  string
    Status:  number;
}

export interface ProductBodyUpdate {
    Sku: string;
    Product_name: string;
    Qty:  number;
    Price:  number;
    Unit:  string
    Status:  number;
}

export interface ProductSearch {
    sku: string
}