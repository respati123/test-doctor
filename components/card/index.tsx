import { ReactNode } from "react"
import styles from './Card.module.scss'

interface ICard {
    children: ReactNode
}

const Card = (props: ICard) => {
    const { children } = props;
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default Card;