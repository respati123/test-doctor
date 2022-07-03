import SkeletonLoader from "components/skeleton";
import { ReactNode } from "react";
import styles from './Table.module.scss';


export interface Irules {
    data: string;
    name: string;
}

interface ITableProps {
    rules: Irules[],
    data: [],
    isLoading: boolean,
    renderRowRight?: (head: Irules[], data: any) => ReactNode
}

export const Table = (props: ITableProps) => {
    
    const { rules, data, isLoading, renderRowRight} = props;

    console.log("isLoading", isLoading)

    const renderHeader = () => {
        return (
            <thead>
                <tr>
                    {rules.map((head:Irules, index: number) => (
                        <th key={`${index}-${head.name}`}>{head.name}</th>
                    ))}
                    {renderRowRight && <th>Action</th>}
                </tr>
            </thead>
        )
    }


    const renderBody = () => {
        return data?.map((item: any, index: number) => {
            return (
                <tr key={`${index}-${JSON.stringify(item)}`}>
                    {rules.map((head: Irules, index: number) => {
                        return (
                            <td key={`${index}-row-${head.name}`}>
                                {item[head.data]}
                            </td>
                        )
                    })}
                    {renderRowRight && renderRowRight(rules, item)}
                </tr>    
            )
        })
    }

    const renderLoading = () => {
        return [...Array(5)].map((_, index) => {
            return (
                <tr key={`${index}-loading-${index}`}>
                    {rules?.map((item: Irules, index: number) => (<td key={`${index}-skeleton-${item.name}`}><SkeletonLoader /></td>))}
                </tr>
            )
        })
    }

    return (
        <table id={styles['table_custom']}>
            {renderHeader()}
            <tbody>
                {!isLoading ? renderBody() : renderLoading()}
            </tbody>
        </table>
    )
}