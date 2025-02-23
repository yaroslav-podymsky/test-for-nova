import { FC } from "react";
import styles from "./Scale.module.css"
import cn from 'classnames';


type TProps = {
    value: number;
    className?: string
}

const Scale: FC<TProps> = ({ value, className }) => {
    const precent = (8 / 100)
    const currentPrecent = value / precent > 100 ? 100 : value / precent

    return (
        <div className={cn(
            styles.root, className, {
        })
        }>
            <div
                style={{ maxWidth: `${currentPrecent}%` }}
                className={styles.path}>

            </div>
        </div>
    )
}

export default Scale