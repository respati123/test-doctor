import { price, product_name, quantity, sku, status, unit } from 'constants/string.constatns';
import { ProductBodyAdd } from 'data/datasource/API/entity/Product';
import styles from './FormProduct.module.scss';

interface IFormProductProps {
    form: ProductBodyAdd;
    isUpdate: boolean;
    onChange: (type: string, value: string) => void;
    isLoading: boolean;
    onUpdate: () => void;
    onAdd: () => void;
}

const FormProduct = (props: IFormProductProps) => {

    const { form, isUpdate, onChange, isLoading, onUpdate, onAdd } = props;

    console.log("isUpdate", isUpdate)

    return (
        <>
        <div className={styles.container}>
            <input type="text" value={form?.Sku} placeholder="SKU" className={styles.form_input} onChange={(e) => onChange(sku, e.target.value)}/>
            <input type="text" value={form?.Product_name} placeholder="Product Name" className={styles.form_input} onChange={(e) => onChange(product_name, e.target.value)}/>
            <input type="text" value={form?.Qty} placeholder="Quantity" className={styles.form_input} onChange={(e) => onChange(quantity, e.target.value)}/>
            <input type="text" value={form?.Price} placeholder="Price" className={styles.form_input} onChange={(e) => onChange(price, e.target.value)}/>
            <input type="text" value={form?.Unit} placeholder="Unit" className={styles.form_input} onChange={(e) => onChange(unit, e.target.value)}/>
            <input type="text" value={form?.Status} placeholder="Status" className={styles.form_input} onChange={(e) => onChange(status, e.target.value)}/>
        </div>
        <button className={styles.button} onClick={() => isUpdate ? onUpdate() : onAdd()}>{isLoading ? "Loading" : isUpdate ? "Update" : "Add "}</button>
        </>
    )
}

export default FormProduct