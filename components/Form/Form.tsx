"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';
import Selector from '../Selector/Selector';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import FileInput from '../FileInput/FileInput';
import { emailPattern, namePattern, phonePattern } from '@/utils/regexp';
import useDelay from '@/hooks/useDelay';
import { useRouter } from 'next/navigation';

export type TDataKey = "name" | "phone" | "email" | "message" | "city" | "file"
export type TDataValue = string | FileList
export type DataForm = Record<TDataKey, TDataValue>

const countries = [
    'Москва',
    'Санкт-Питербург',
    'Казань',
    'Краснодар',
    'Ростов на дону',
];

const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        setError,
        clearErrors,
    } = useForm<DataForm>();
    const [isFormSubmit, setIsFormSubmit] = useState(false)
    const { delay, isLoading } = useDelay()
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/');
    };


    const onSubmit = async (data: DataForm) => {
        console.log('Form data:', data);
        await delay()
        setIsFormSubmit(true)
    };

    const setCountry = (value: string) => {
        setValue('city', value)
    }

    if (isFormSubmit) return (
        <div className={styles.root}>
            <h1 className={styles.title}>Заявка отправлена!</h1>
            <h4>Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.</h4>
            <Button type="primary" className={styles.submitButton} onClick={handleNavigation} title={'Вернуться на главную'} />
        </div>
    )

    return (
        <div className={styles.root}>
            <h1 style={{ whiteSpace: "nowrap" }} className={styles.title}>Оставьте заявку</h1>
            <form className={styles.form}>
                <Selector clearErrors={clearErrors} setError={setError} errors={errors.city} value={getValues('city')} setCountry={setCountry} options={countries} />
                <Input errors={errors.name} name={"name"} label={"Имя"} register={register} pattern={namePattern} />
                <div className={styles.inputsBlock}>
                    <Input errors={errors.email} name={"email"} label={"Email"} register={register} pattern={emailPattern} />
                    <Input placeholder={"+7 (___) __-__-___"} errors={errors.phone} name={"phone"} register={register} pattern={phonePattern} />
                </div>
                <Textarea register={register} errors={errors.message} />
                <FileInput register={register} errors={errors.file} />
                <Button isLoading={isLoading} type="primary" className={styles.submitButton} onClick={handleSubmit(onSubmit)} title={'Оставить заявку'} />
            </form>
        </div>
    );
};

export default Form;
