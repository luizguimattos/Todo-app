import { Tray } from '@phosphor-icons/react';
import styles from './EmptyList.module.css'

export function EmptyList() {

    return (
        <div className={styles.container}>

            <Tray size={32} />

            <h4>Você não possui todo item cadastrado.</h4>
        </div>
    );
}