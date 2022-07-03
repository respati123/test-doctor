export default interface Product {
    id: number;
    sku: string;
    product_name: string;
    qty: number;
    price: number,
    unit: string;
    image: string | null;
    status: number;
    created_at: string;
    updated_at: string;
} 