import { FC } from "react";
import styles from "./DescriptionBlock.module.css"
import Button from '../Button/Button';

const DescriptionBlock: FC = ({ }) => {
    return (
        <div className={styles.root}>
            <div className={styles.img}></div>
            <div className={styles.descriptions}>
                <h1 className={styles.title}>Сериал Ведьмак</h1>
                <p>Геральт из Ривии, наемный охотник за чудовищами,
                    перенесший мутации, идет навстречу своей судьбе
                    в неспокойном мире, где люди часто оказываются
                    куда коварнее чудовищ.
                </p>
                <Button size='s' type='primary' title={'Смотреть сериал'} />
            </div>
        </div>
    )
}

export default DescriptionBlock