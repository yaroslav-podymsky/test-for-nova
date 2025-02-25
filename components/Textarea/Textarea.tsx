import { FC } from "react";
import styles from './Textarea.module.css'
import { FieldError, UseFormRegister } from "react-hook-form";
import { DataForm } from "../Form/Form";
import classNames from "classnames";

type TProps = {
    register: UseFormRegister<DataForm>;
    errors?: FieldError,
}

const Textarea: FC<TProps> = ({ register, errors, }) => {
    return (
        <div className={styles.root}>
            <textarea className={classNames(styles.textarea, {
                [styles.isError]: errors
            })} placeholder={'Оставьте пометку к заказу'}   {...register("message", { required: 'Поле не заполненно' })}></textarea>
            {errors && <p className={styles.errorMessage}>{errors.message}</p>}
        </div>
    )
}

export default Textarea