import { FC } from "react";
import styles from "./SliderCard.module.css"
import Image from "next/image"
import { TCardData } from "../SlickSlider/SlickSlider";


type TProps = {} & TCardData

const SliderCard: FC<TProps> = ({ img, subTitle, title }) => {
    return (
        <div className={styles.root}>
            <Image className={styles.img} src={img} alt=""></Image>
            <div className={styles.descriptions}>
                <h4 style={{ fontWeight: 600 }}>{title}</h4>
                <h4>{subTitle}</h4>
                {/* <p>{description}</p> */}
            </div>
        </div>
    )
}

export default SliderCard