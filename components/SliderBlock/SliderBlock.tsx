import { FC } from "react";
import SlickSlider, { TCardsData } from '@/components/SlickSlider/SlickSlider';
import cardImg1 from "../../resources/images/card-img-1.png"
import cardImg2 from "../../resources/images/card-img-2.jpg"
import cardImg3 from "../../resources/images/card-img-3.png"
import cardImg4 from "../../resources/images/card-img-4.png"
import cardImg5 from "../../resources/images/card-img-5.png"
import cardImg6 from "../../resources/images/card-img-6.png"
import cardImg7 from "../../resources/images/card-img-7.jpg"
import cardImg8 from "../../resources/images/card-img-8.png"
import styles from './SliderBlock.module.css'

const cardsData: TCardsData = [
    {
        img: cardImg1,
        description: "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        subTitle: "Генри Кавилл",
        title: "Геральт"
    },
    {
        img: cardImg2,
        description: "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        subTitle: "Генри Кавилл",
        title: "Геральт"
    },
    {
        img: cardImg3,
        description: "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        subTitle: "Генри Кавилл",
        title: "Геральт"
    },
    {
        img: cardImg4,
        description: "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        subTitle: "Генри Кавилл",
        title: "Геральт"
    },
    {
        img: cardImg5,
        description: "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        subTitle: "Генри Кавилл",
        title: "Геральт"
    },
    {
        img: cardImg6,
        description: "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        subTitle: "Генри Кавилл",
        title: "Геральт"
    },
    {
        img: cardImg7,
        description: "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        subTitle: "Генри Кавилл",
        title: "Геральт"
    },
    {
        img: cardImg8,
        description: "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        subTitle: "Генри Кавилл",
        title: "Геральт"
    },
]
type TProps = object

const SliderBlock: FC<TProps> = ({ }) => {
    return (
        <div className={styles.root}>
            <h2>Актерский состав</h2>
            <SlickSlider cardsData={cardsData} />
        </div>
    )
}

export default SliderBlock;