import { FC } from "react";
import styles from "./InfoBlock.module.css"

const InfoBlock: FC = ({ }) => {
    return (
        <div className={styles.root}>
            <div className={styles.item}>
                <p>Наша горячая линия</p>
                <h3>8 800 38 23 112</h3>
            </div>
            <div className={styles.item}>
                <p>Главный офис</p>
                <h3>г. Москва, Садовническая ул., 80</h3>
            </div>
            <div className={styles.item}>
                <p>Часы работы</p>
                <h3>Пн-Пт с 10:00 до 22:00</h3>
            </div>
        </div>
    )
}

export default InfoBlock