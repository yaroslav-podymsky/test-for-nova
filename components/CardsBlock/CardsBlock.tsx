'use client';

import { FC } from "react";
import styles from "./CardsBlock.module.css"
import { v4 as uuidv4 } from 'uuid';
import Button from "../Button/Button";
import { useAppSelector } from "@/store/store";
import useDelay from "@/hooks/useDelay";
import { useDispatch } from "react-redux";
import { addImage } from "@/store/imagesSlice";



const CardsBlock: FC = ({ }) => {
    const { delay, isLoading } = useDelay()
    const cardData = useAppSelector((store) => store.images.images)
    const mainCards = cardData.slice(0, 5)
    const additionalCards = cardData.slice(5)

    const dispatch = useDispatch()

    const addCard = async () => {
        await delay()
        dispatch(addImage());
    }

    return (
        <div className={styles.root}>
            <h2>Кадры со съемок</h2>
            <div className={styles.content}>
                <div style={{ backgroundImage: `url(${mainCards[0].img.src})` }} key={uuidv4()} className={styles.rootImage}></div>
                <div className={styles.cardsBlock}>
                    {mainCards.map((el, index) => {
                        if (index === 0) return
                        return (
                            <div style={{ backgroundImage: `url(${el.img.src})` }} key={uuidv4()} className={styles.card}></div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.additionalCardsBlock}>
                {additionalCards.map((el) => {
                    return (
                        <div style={{ backgroundImage: `url(${el.img.src})` }} key={uuidv4()} className={styles.card}></div>
                    )
                })}
            </div>
            <Button isLoading={isLoading} onClick={addCard} className={styles.button} type="secondary" title="Показать еще"></Button>
        </div>
    )
}

export default CardsBlock