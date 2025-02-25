import { ChangeEvent, FC, useEffect, useState } from "react";
import styles from './Input.module.css'
import { FieldError, UseFormRegister, ValidationRule } from "react-hook-form";
import { DataForm, TDataKey } from "../Form/Form";
import classNames from "classnames";

type TProps = {
    register: UseFormRegister<DataForm>;
    errors?: FieldError,
    label?: string;
    name: TDataKey;
    pattern?: ValidationRule<RegExp>;
    placeholder?: string;

}

const Input: FC<TProps> = ({ register, errors, label, name, pattern, placeholder }) => {
    const [stateValue, setStateValue] = useState('');
    const [labelClassName, setLabelClassName] = useState(styles.label);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setStateValue(value)
    };


    const handleFocus = () => {
        setLabelClassName(styles.labelOnFocus)
    };

    const handleBlur = () => {
        if (!stateValue) {
            setLabelClassName(styles.label)
        }
    };
    useEffect(() => {
        if (!label) {
            setLabelClassName(styles.labelOnFocus)
        }
    }, [label])

    return (
        <div className={styles.root}>
            {label && <p className={labelClassName}>{label}</p>}
            <input
                placeholder={placeholder}
                autoComplete="none"
                style={!label ? { padding: "0 20px" } : {}}
                onFocus={handleFocus}
                {...register(name, { required: 'Поле не заполненно', pattern, onBlur: () => handleBlur(), onChange: (e) => handleChange(e) })}
                className={classNames(styles.input, {
                    [styles.isError]: errors
                })}
            />
            {errors && <p className={styles.errorMessage}>{errors.message}</p>}
        </div>
    )
}

export default Input