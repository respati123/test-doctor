import { ReactNode } from "react";
import styles from './Layout.module.scss';
import Router from 'next/router'

export interface ILayoutProps {
    children: ReactNode
}

const Layout : React.FC<ILayoutProps> = (props: ILayoutProps) => {
    const { children } = props;
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Dashboard</span>
                <span onClick={() => Router.push("/login")} className={styles.button_logout}>Logout</span>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;