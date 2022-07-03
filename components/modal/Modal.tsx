import { ReactNode } from "react";
import styles from './Modal.module.scss';

interface IModalProps {
    children: ReactNode;
    visible: boolean;
    onClose: () => void;
}

const Modal = (props: IModalProps) => {

    const { children, onClose, visible } = props;
    return (
        <div className={styles.modal} style={{ display: visible ? "block" : "none"}}>
            <div className={styles.content}>
                <div className={styles.close} onClick={onClose}>close</div>
                {children}
            </div>
        </div>
    )
}

export default Modal;