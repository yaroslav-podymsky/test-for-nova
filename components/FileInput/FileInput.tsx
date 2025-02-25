import { FC, useState } from "react";
import styles from './FileInput.module.css'
import { FieldError, UseFormRegister } from "react-hook-form";
import { DataForm } from "../Form/Form";
import img from '../../resources/images/paper-clip.png'
import Image from 'next/image'
import classNames from "classnames";

type TProps = {
    register: UseFormRegister<DataForm>;
    errors?: FieldError,
}

const FileInput: FC<TProps> = ({ register, errors }) => {
    const [fileName, setFileName] = useState('');
    const handleChange = (e) => {
        const fileName = e.target.files["0"].name
        console.log('e', e.target.files["0"].name)
        console.log('fileName', fileName)
        setFileName(fileName)
    };


    return (
        <div className={styles.root}>
            <input readOnly {...register('file', { required: 'Поле не заполненно', onChange: (e) => handleChange(e) })} type="file" id="real-input" hidden />
            <label htmlFor="real-input" className={classNames(styles.fileInput, {
                [styles.isError]: errors
            })} >{fileName ? fileName : "Прикрепите файл"}  <Image src={img} alt="paper-clip" /></label>

            {errors && <p className={styles.errorMessage}>{errors.message}</p>}
        </div>
    )
}

export default FileInput