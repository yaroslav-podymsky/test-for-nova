import { FC, useState } from "react";
import styles from "./SliderCard.module.css"
import Image from "next/image"
import { TCardData } from "../SlickSlider/SlickSlider";
import classNames from "classnames";


type TProps = {} & TCardData

const SliderCard: FC<TProps> = ({ img, subTitle, title, description }) => {
    const [isShowScreen, setIsShowScreen] = useState(false)

    return (
        <div onMouseEnter={() => setIsShowScreen(true)} onMouseLeave={() => setIsShowScreen(false)} className={styles.root}>
            <div className={classNames(styles.rootScreen, {
            })}>
            </div>
            <Image className={styles.img} src={img} alt=""></Image>
            <div className={classNames(styles.descriptions, {
                [styles.descriptionsSecondPosition]: isShowScreen
            })}>
                <h4 className={styles.title} style={{ fontWeight: 600 }}>{title}</h4>
                <h4 className={styles.subTitle}>{subTitle}</h4>
                {isShowScreen && <p className={styles.description}>{description}</p>}
            </div>
        </div>
    )
}

export default SliderCard