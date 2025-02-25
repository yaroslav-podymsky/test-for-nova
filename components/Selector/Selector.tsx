import classNames from 'classnames';
import styles from './Selector.module.css'
import { FC, useEffect, useState } from "react";
import { FieldError, UseFormClearErrors, UseFormSetError } from 'react-hook-form';
import { DataForm, TDataValue } from '../Form/Form';
import Image from "next/image"
import arrow from '../../resources/images/arrow.png'

type TProps = {
    options: string[],
    setCountry: (value: string) => void,
    value: TDataValue,
    errors?: FieldError,
    setError: UseFormSetError<DataForm>,
    clearErrors: UseFormClearErrors<DataForm>
}

const Selector: FC<TProps> = ({ options, setCountry, value, errors, setError, clearErrors }) => {
    const [selectedCountry, setSelectedCountry] = useState(value)
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setSelectedCountry(option)
        setCountry(option)
        setIsOpen(false);
    };

    useEffect(() => {
        if (!selectedCountry) { setError('city', { message: "Город не выбран" }) } else {
            clearErrors('city')
        }
    }, [clearErrors, selectedCountry, setError])

    return (
        <div className={styles.root}>
            <Image className={classNames(styles.arrow, {
                [styles.rotate]: isOpen
            })} src={arrow} alt='' ></Image>
            {selectedCountry ?
                (<p onClick={() => setIsOpen(!isOpen)} className={styles.option}>{typeof selectedCountry === "string" ? selectedCountry : ""}</p>) :
                (<p onClick={() => setIsOpen(!isOpen)} className={classNames(styles.defaultValue, {
                    [styles.isError]: errors
                })} > Выберете город</p>)
            }
            {isOpen && (
                <div className={classNames(styles.options, {
                    [styles.isError]: errors
                })}>
                    {options.map((option: string) => (

                        <p className={classNames(styles.option, styles.optionHover)}
                            key={option}
                            onClick={() => handleOptionClick(option)}>{option}</p>
                    ))}
                </div>
            )}
            {errors && <p className={styles.errorMessage}>{errors.message}</p>}
        </div>
    );
};

export default Selector;