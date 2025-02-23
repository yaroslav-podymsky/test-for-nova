import { CSSProperties, FC, useState } from "react";
import cn from "classnames";
import styles from './SliderArrow.module.css'

type TProps = {
    onClick?: () => void;
    type?: 'prev' | 'next';
    style?: CSSProperties;
    disabled?: boolean

}

const SliderArrow: FC<TProps> = ({ onClick, type = "next", style, disabled }) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    if (disabled) return (
        <svg
            style={style}
            className={cn(
                styles.root, {
                [styles.rotate]: type === "prev",

            }
            )}
            width="32"
            height="42"
            viewBox={`0 -5 18 42`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.276 15.1219L2.47506 0.361867C1.99013 -0.121444 1.20501 
            -0.120631 0.720883 0.364367C0.237135 0.849302 0.238385 1.63486 0.723383
             2.11855L14.6433 16L0.722883 29.8815C0.237947 30.3652 0.236697 31.1503 
             0.720383 31.6353C0.963069 31.8784 1.28101 32 1.59894 32C1.91607 32 2.23275 
             31.8792 2.475 31.6378L17.276 16.8782C17.5096 16.6458 17.6406 16.3295 17.6406 
             16C17.6406 15.6706 17.5092 15.3547 17.276 15.1219Z" fill={"#5d5d5d"} />
        </svg>
    )

    return (
        <svg
            onMouseEnter={() => {
                if (disabled) return
                setIsHover(true)
            }}
            onMouseLeave={() => {
                if (disabled) return
                setIsHover(false)

            }}
            style={style}
            onClick={onClick}
            className={cn(
                styles.root, styles.hover, {
                [styles.rotate]: type === "prev",

            }
            )}
            width="32"
            height="42"
            viewBox={`0 -5 18 42`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                    <feOffset dx="0" dy="0" result="offsetblur" />
                    <feFlood floodColor="#FF1E1E80" />
                    <feComposite in2="offsetblur" operator="in" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <path filter={isHover ? `url(#shadow)` : ""} d="M17.276 15.1219L2.47506 0.361867C1.99013
             -0.121444 1.20501 -0.120631 0.720883 0.364367C0.237135 0.849302 0.238385 1.63486 0.723383
              2.11855L14.6433 16L0.722883 29.8815C0.237947 30.3652 0.236697 31.1503 0.720383 
              31.6353C0.963069 31.8784 1.28101 32 1.59894 32C1.91607 32 2.23275 31.8792 2.475
               31.6378L17.276 16.8782C17.5096 16.6458 17.6406 16.3295 17.6406 16C17.6406 15.6706
                17.5092 15.3547 17.276 15.1219Z" fill={`#EC3F3F`} />
        </svg>
    )

}

export default SliderArrow