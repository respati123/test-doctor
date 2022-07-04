import { ReactNode } from "react";
import styles from './Layout.module.scss';
import Router from 'next/router'
import { deleteStorage } from "utils/storage.helper";
import { STORAGE_USER } from "constants/storage.constants";

export interface ILayoutProps {
    children: ReactNode
}

const Layout : React.FC<ILayoutProps> = (props: ILayoutProps) => {
    const { children } = props;

    const handleLogout = () => {
        deleteStorage(STORAGE_USER)
        Router.push("/login")
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Dashboard</span>
                <span onClick={handleLogout} className={styles.button_logout}>Logout</span>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;